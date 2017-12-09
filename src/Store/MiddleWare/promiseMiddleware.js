import types from './../types';
import { isFSA } from 'flux-standard-action';

const isPromise = (val) => {
  if (val !== null && typeof val === 'object') {
    return val.promise && typeof val.promise.then === 'function';
  }
}
// 定义三个状态，等待，失败 和 请求内容获取成功
const defaultTypes = ['PENDING', 'SUCCESS', 'ERROR'];
const [ PENDING, SUCCESS, ERROR ] = defaultTypes;
const isAction = resolved => {
  return resolved && (resolved.meta || resolved.payload)
}
const isThunk = resolved => {
  return typeof resolved === 'function'
}

export default function promiseMiddleware ({ dispatch }) {
  return next => action => {
    // 设计思路：根据FSA规范，加入不在 ['type', 'payload', 'error', 'meta'] 范围内的参数 parmas，区分是 ajax请求 还是 本地 reducer state修改方法）
    // 此处设计参考 redux-promise, 带有 payload的都会被过滤
    if (!isFSA(action)) {
      next(action)
    }
    //    ---------------- 增加PENDING状态 ----------------
    // 解构 action 和 payload，用于组装新的action
    const { type, payload, meta, params = {} } = action; // 根据FSA解构action 对象
    /**
     * 本脚手架加入了react-router-redux,该库在监听路由的时候，会返回一个遵守FSA规范的对象，
     * 但这个对象不是ajax请求，不需要PEDING状态，所以加入是否是promise对象的判断，如果不是正常执行，
     * 反之，增加状态
     */
    if (!isPromise(action.payload)) {
      if (isFSA(action)) next(action);
    } else {
      next({
        type: `${type}_${PENDING}`,
        // ...!!meta ? { meta } : {}
      })
    }
    if (isPromise(action.payload)) {
      const { promise, data } = payload;
      const getResolveAction = isError => {
        return ({
          type: `${type}_${isError ? ERROR : SUCCESS}`,
          // ...!!meta ? { meta } : {}
          // ...!!isError ? { error: true } : {},
        })
      }
      action.payload.promise = promise.then(
        result => {
          dispatch({ ...getResolveAction(), payload: result })
        },
        error => {
          dispatch({ ...getResolveAction(true), payload: error, error: true })
        })
    }
  };
}

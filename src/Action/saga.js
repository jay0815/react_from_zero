import { takeEvery } from 'redux-saga';
import { put, take , fork, cancel } from 'redux-saga/effects';
import types from '../Store/types';
import { demoSetState } from './index';
// 一个工具函数：返回一个 Promise，这个 Promise 将在 1 秒后 resolve
// export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// Our worker Saga: 将异步执行 increment 任务
//
// export function demoSetState () {
// 	return
// 		({
// 			type:types.SET_APP_STATE
// 		})
// }

export function* incrementAsync () {
	console.log('incrementAsync',demoSetState());
	yield put(demoSetState);
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action 调用后，派生一个新的 incrementAsync 任务
export function* watchIncrementAsync () {
	yield* takeEvery('START',incrementAsync);
	// yield take(STOP_BACKGROUND_SYNC)
    // // 用户点击了停止，取消后台任务
    // // 将抛出一个 SagaCancellationException 错误至被 fork 的 bgSync 任务
    // yield cancel(bgSyncTask)

  // hile( yield take('START') ) {
  //   // 启动后台任务
  //   const bgSyncTask = yield fork(incrementAsync)
  //
  //   // 等待用户的停止操作
  //   yield take('STOP')
  //   // 用户点击了停止，取消后台任务
  //   // 将抛出一个 SagaCancellationException 错误至被 fork 的 bgSync 任务
  //   yield cancel(bgSyncTask)
  // }
}

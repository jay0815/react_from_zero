import types from './../types';

export default store => next => action => {
  // if (action.payload && action.payload.code) {
  //   const code = action.payload.code
  //   const msg = action.payload.message || '操作失败！'
  //
  //   if (code == '-3') {
  //       next(action)
  //       message.error(msg);
  //       return;
  //   }
  //
  //   if (code == '-2') {
  //       // message.error('登录超时，请重新登录');
  //       next({
  //               type: types.TIMEOUT
  //           })
  //       return;
  //   }
  // }
  next(action);
};

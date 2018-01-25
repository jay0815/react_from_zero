// 抽像 Reducers 生成器
export function reducerCreators (initialState, actionTypeMapList) {
  return (state = initialState, action) => {
    // 校验
    const reducerInstance = typeof actionTypeMapList === 'object' && actionTypeMapList[action.type] ? actionTypeMapList[action.type](state, action.payload ? action.payload : {}, action.params) : state;
    return reducerInstance;
  };
}
// reuducer 中抽离 params的版本
// export function reducerCreators (initialState, actionTypeMapList) {
//   return (state = initialState, action) => {
//     // 校验
//     const reducerInstance = typeof actionTypeMapList === 'object' && actionTypeMapList[action.type] ? actionTypeMapList[action.type](state, action) : state;
//     return reducerInstance;
//   };
// }

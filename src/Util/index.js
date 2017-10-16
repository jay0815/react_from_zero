export const noop = function noop () {};
// 抽像 Reducers 生成器
export function reducerCreators (initialState, actionTypeMapList) {
	return (state = initialState, action) => {
		const reducerInstance = typeof actionTypeMapList === 'object' && actionTypeMapList[action.type] ? actionTypeMapList[action.type](state, action) : state;
		return reducerInstance;
	};
}

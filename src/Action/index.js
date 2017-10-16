import types from '../Store/types';

// /**
//  * demo
//  * @param {[type]} param [description]
//  */
export function demoSetState () {
	return (dispatch,getState) => {
		dispatch({
			type: types.SET_APP_STATE,
		});
	}
}

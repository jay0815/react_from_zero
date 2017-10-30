import types from '../Store/types';
import { get_login } from '../Api/index';
/**
 * demo
 * @param {[type]} param [description]
 */
export function demoSetState () {
	return (dispatch, getState)=>
		dispatch({
			type: types.SET_APP_STATE
		})

}
export function change (param) {
	return (dispatch, getState) => {
		dispatch({
			type: types.CHANGE,
			params: {
				start: param === 'start' ? true : false,
				stop: param === 'stop' ? true : false,
			}
		});
	}
}
export function login (param) {
	return (dispatch, getState) => {
		const params = {
			username: 'bear',
			password: '123456',
			url: '123456789'
		};
		dispatch({
			type: types.LOGIN,
			payload: {
				promise: get_login(params).then((data) => {
					return data;
				})
			}
		});
	};
}

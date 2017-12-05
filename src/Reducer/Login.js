// import React from 'react';
// import Immutable from 'immutable';
import types from '../Store/types';
import { reducerCreators } from '../Util/index';
// import { createReducer } from 'redux-immutablejs';

const initialState = {
	name: '',
	password: '',
	token: '',
};

export default reducerCreators(initialState, {
	[`${types.SET_LOGIN_INFO}`]: (state, data, params) => {
		console.log(data);
		console.log(params);
		return Object.assign({}, state, {
			...params
		});
	}
});

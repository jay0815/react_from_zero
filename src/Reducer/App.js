// import React from 'react';
// import Immutable from 'immutable';
import types from '../Store/types';
import { reducerCreators } from '../Util/index';
// import { createReducer } from 'redux-immutablejs';

const initialState = {
	isAuth: true,
	stop: false,
	start: false,
	word: 'qwer',
};

export default reducerCreators(initialState, {
	[`${types.SET_APP_STATE}`]: (state, data, params) => {
		return Object.assign({}, state, {
			isAuth: !state.isAuth
		});
		// return state.set('isAuth', !state.isAuth);
	},
	[`${types.CHANGE}`]: (state, data, params) => {
		return Object.assign({}, state, {
			...params
		});
		// return state.set('isAuth', !state.isAuth);
	}

});

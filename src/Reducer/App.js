// import React from 'react';
// import Immutable from 'immutable';
import types from '../Store/types';
import { reducerCreators } from '../Util/index';
// import { createReducer } from 'redux-immutablejs';

const initialState = {
	isAuth: false,
	isFisrt: false,
	isAdmin: false
};

export default reducerCreators(initialState, {
	[`${types.SET_APP_STATE}`]: (state, data, params) => {
		return Object.assign({}, state, {
			isAuth: !state.isAuth
		});
		// return state.set('isAuth', !state.isAuth);
	}
});

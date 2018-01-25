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
    return Object.assign({}, state, {
      ...params
    });
  },
  [`${types.LOGIN}_ERROR`]: (state, data, params) => {
    return state;
  },
  [`${types.LOGIN}_SUCCESS`]: (state, data, params) => {
    return Object.assign({}, state, {
      ...params
    });
  },
  [`${types.LOGIN}_PENDING`]: (state, data, params) => {
    return state;
  }

});

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
  menuList: [
    {
      key: 'learning-record',
      name: '笔记',
      value: 'learning-record',
      link: 'Record'
    }, {
      key: 'photo',
      name: '随手拍的照骗',
      value: 'photo',
      link: 'Photo'
    }, {
      key: 'translation',
      name: '翻译',
      value: 'translation',
      link: 'Translation'
    }
  ]
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

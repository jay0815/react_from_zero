import { combineReducers } from 'redux';
// import { createReducer } from 'redux-immutablejs';
import { routerReducer } from 'react-router-redux';
// 页面中可以直接 获取到 history 对象 与  react-router 的方法
import Entry from './Entry';
import Login from './Login';

export default combineReducers({
  Entry,
  Login,
  routing: routerReducer
});

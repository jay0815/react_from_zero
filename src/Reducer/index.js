import { combineReducers } from 'redux';
// import { createReducer } from 'redux-immutablejs';
import { routerReducer } from 'react-router-redux';
import App from './App';

export default combineReducers({
	App,
	routing: routerReducer
});

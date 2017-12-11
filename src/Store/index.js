import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import reducer from '../Reducer/index';
import afterApiMiddleware from './MiddleWare/afterApiMiddleware';
import promiseMiddleware from './MiddleWare/promiseMiddleware';
const history = createHistory();
const localRouterMiddleware = routerMiddleware(history);
// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const arr = [localRouterMiddleware, thunk, afterApiMiddleware, promiseMiddleware];
if (process.env.NODE_ENV !== 'production') arr.push(createLogger());
// const state = Immutable.fromJS({});
// 创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。
const store = createStore(reducer, composeEnhancers(applyMiddleware(...arr)));
// store.unsubscribeHistory = history.listen(updateLocation(store));
if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../Reducer/index', () => {
    const nextRootReducer = require('../Reducer/index').default;
    store.replaceReducer(nextRootReducer);
  });
}
// ---redux-saga---
// import createSagaMiddleware from 'redux-saga';
// import {watchIncrementAsync} from '../Action/saga';
// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware,createLogger())));
// sagaMiddleware.run(watchIncrementAsync);
// ---redux-saga---
// ---redux-Immutable---
// import Immutable from 'immutable';
// import { combineReducers } from 'redux-immutablejs';
// ---redux-Immutable---
export default store;

// export default function configureStore(initialState) {
//   // const store = createStore(rootReducer, initialState);
//   // const store = createStoreWithMiddleware(reducer); old
//   console.log(initialState);
//   let store;
//   if(!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__) && process.env.NODE_ENV == 'development'){
//       store = createStore(reducer,initialState)
//   }else{
//     //   store = createStore(reducer,initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//       store = createStore(reducer,initialState,composeEnhancers(applyMiddleware(thunk)))
//   }
//   return store;
// }

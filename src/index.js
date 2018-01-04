import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// AppContainer 是一个 HMR 必须的包裹(wrapper)组件
import { AppContainer } from 'react-hot-loader';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import Redbox from 'redbox-react';
import RouterConfig from './Router'; // 路由配置
import store from './Store'; // 引入Store

const history = createHistory();

// 订阅state改变
store.subscribe(() => {
  // eslint-disable-next-line no-console
  console.log(store.getState());
  // console.log(process.env.NODE_ENV !== 'production' ? store.getState() : ''); 正式环境自动去除 console\warnings
});
const render = (Component) => {
  ReactDOM.render(<AppContainer><Provider store={store}><ConnectedRouter history={history}><Component /></ConnectedRouter></Provider></AppContainer>, document.getElementById('root'));
};

render(RouterConfig);

if (module.hot) {
  /**
	* Warning from React Router, caused by react-hot-loader.
	* The warning can be safely ignored, so filter it from the console.
	* Otherwise you'll see it every time something changes.
	* See https://github.com/gaearon/react-hot-loader/issues/298
	*/
  const orgError = console.error;// eslint-disable-line no-console
  // eslint-disable-next-line no-console
  console.error = (message) => {
    if (message && message.indexOf('You cannot change <Router routes>;') === -1) {
      // Log the error as normally
      orgError.apply(console, [message]);
    }
  };
  module.hot.accept('./Router', () => { render(RouterConfig); });
}

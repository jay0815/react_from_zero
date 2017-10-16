import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
// AppContainer 是一个 HMR 必须的包裹(wrapper)组件
import RouterConfig from './Router'; // 路由配置
import store from './Store'; // 引入Store
// const store = configureStore();
// 订阅state改变
store.subscribe(() => {
	console.log(store.getState());
});

const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				<Component />
			</Provider>
		</AppContainer>, document.getElementById('root'));
};

render(RouterConfig);

// 模块热替换的 API
// if (module.hot) {
//   module.hot.accept('./Router', () => {
//     render(App);
//   });
// }

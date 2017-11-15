import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Bundle from './../Bundle';
import Home from '../View/Home'; // 首页组件
// import Entry from '../View/Entry';
// bundle模型用来异步加载组件
// import Bundle from '../Bundle';
// 导入各种组件
// // 同步加载
import Entry from 'bundle-loader?lazy!../View/Entry'; // 首页组件
import Login from 'bundle-loader?lazy!../View/Login'; // 登录页组件
import Record from 'bundle-loader?lazy!../View/Record';



// 异步加载
/*eslint-disable*/
// import loadFrom from 'bundle-loader?lazy!../Component/From'; // 表单组件
// import loadComment from 'bundle-loader?lazy!../Component/Comment'; // 评论组件
// import loadLike from 'bundle-loader?lazy!../Containers/LikeContainer'; // 状态 Like组件
// import loadTodoList from 'bundle-loader?lazy!../Containers/TodoListContainer'; // TodoList组件
/* eslint-enable */

// components load their module for initial visit
// //这里只是给this.props.child传一个方法，最后在Bundle的render里面调用W
const createComponent = component => props => (
	<Bundle load={component}>
		{Component => { return <Component {...props} />; }}
	</Bundle>
);
// 路由配置
const RouterConfig = () => (
	<div>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/login' component={createComponent(Login)} />
			<Route path='/Entry' component={createComponent(Entry)} />
			<Route
				render={() => {
					return (
						<Redirect to='/' />
					);
				}}
			/>
		</Switch>
	</div>
);
// 导出
export default RouterConfig;

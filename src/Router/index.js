import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Bundle from './../Bundle';
import Home from '../Containers/Home'; // 首页组件
// 同步加载
import Entry from 'bundle-loader?lazy!../Containers/Entry'; // 首页组件
import Login from 'bundle-loader?lazy!../Containers/Login'; // 登录页组件

// 异步加载
/*eslint-disable*/
// import loadFrom from 'bundle-loader?lazy!../Component/From'; // 表单组件
// import loadComment from 'bundle-loader?lazy!../Component/Comment'; // 评论组件
// import loadLike from 'bundle-loader?lazy!../Containers/LikeContainer'; // 状态 Like组件
// import loadTodoList from 'bundle-loader?lazy!../Containers/TodoListContainer'; // TodoList组件
/* eslint-enable */

// components load their module for initial visit
// 这里只是给this.props.child传一个方法，最后在Bundle的render里面调用
const createComponent = component => props => (
  <Bundle load={component}>
    {Component => { return <Component {...props} /> }}
  </Bundle>
);
// 路由配置
const RouterConfig = () => {
  return (
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
}
// 导出
export default RouterConfig;

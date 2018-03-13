import React from 'react';
import { Route } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary'
/**
 * [PrivateRoute description]
 * @param {[type]} component 我们传入进来的组件
 * @param {[type]} rest      route组件的非render参数，详情参考http://reacttraining.cn/web/api/Route
 */

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    true ? (
      <ErrorBoundary>
        <Component {...props}/>
      </ErrorBoundary>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
export default PrivateRoute;

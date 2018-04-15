import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';
import { getCookie } from '../../Util/index'
/**
 * [PrivateRoute description]
 * @param {[type]} component 我们传入进来的组件
 * @param {[type]} rest      route组件的非render参数，详情参考http://reacttraining.cn/web/api/Route
 */

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
    console.log(getCookie('test'));
    return (
      getCookie('test') != undefined ? (
        <ErrorBoundary>
          <Component {...props}/>
        </ErrorBoundary>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )
  }} />
)
export default PrivateRoute;

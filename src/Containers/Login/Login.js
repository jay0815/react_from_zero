import React, { Component } from 'react';
import { Layout, Button } from 'antd';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { login, change } from '../../Action/login';
import './index.less';

export default class Login extends Component {
  state = {
    labelArray: ['button', 'checkbox']
  }
  componentWillMount () {
    // const info = {
    // 	name: 'Jack',
    // 	age: 20,
    // 	id: '001'
    // };
    // sessionStorage.setItem('jackInfo', JSON.stringify(info));
  }
  nameChange = (value) => {
    this.props.change({ name: value });
  }
  passwordChange = (value) => {
    this.props.change({ password: value });
  }
  render () {
    return (
      <div className='login-style' >
        <div className='top-icon'>
          <div className='top-header'>
            <NavLink to='/'>
              <img alt='' className='top-logo' src={require('../../Static/Svg/adminIcon.svg')} />
              <span className='top-title'>Jack Qian`s BLOG</span>
            </NavLink>
          </div>
          <Button onClick={() => { this.nameChange('Jack'); }} > Jack</Button>
          <Button onClick={() => { this.passwordChange(2333) }} > 2333</Button>
          <p className='top-desc'>Jack Qian 一个走在全栈路上的小小前端程序猿</p>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  // cancelInfo: PropTypes.object,
  // isAuth: PropTypes.bool.isRequired,
  // itemList: PropTypes.array.isRequired,
  // fetchUser: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired
};

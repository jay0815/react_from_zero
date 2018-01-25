import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// import { Layout, Affix, Button, Menu } from 'antd';
import QueueAnim from 'rc-queue-anim';
// import './index.less';

// const {
//   Header, Footer, Content, Sider
// } = Layout;

export default class CommonTemplate extends Component {
  componentWillMount () {
  }
  componentDidCatch (error, info) {
    // eslint-disable-next-line no-console
    console.log(info);
    // eslint-disable-next-line no-console
    console.log(error);
  }
  render () {
    return (
      <div>
        CommonTemplate
      </div>
    );
  }
}
CommonTemplate.propTypes = {
  // history: PropTypes.object,
  // menuList: PropTypes.array.isRequired,
  // cancelInfo: PropTypes.object,
  // memo: PropTypes.string.isRequired,
  // isAuth: PropTypes.bool.isRequired,
  // itemList: PropTypes.array.isRequired,
  // fetchUser: PropTypes.func.isRequired,
  // word: PropTypes.string.isRequired,
  // change: PropTypes.func.isRequired,
  // demoSetState: PropTypes.func.isRequired
};

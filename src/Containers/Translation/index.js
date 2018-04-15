import React, { Component } from 'react';
// import { Component } from 'react-dom';
import PropTypes from 'prop-types';
import { BackTop } from 'antd';
// import './index.less';

// const {
//   Header, Footer, Content, Sider
// } = Layout;

export default class Translation extends Component {
  componentWillMount () {
  }
  render () {
    return (
      [
        <BackTop />,
        <div style={{height:1800}}>
          Translation
        </div>
      ]
    );
  }
}
Translation.propTypes = {
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

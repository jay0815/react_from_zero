import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';
import './index.less';
import svgIcon from '../../Static/Svg/adminIcon.svg';

export default class Home extends Component {
  componentWillMount () {
  }
  componentDidMount () {
  }
  componentWillUnmount () {
  }
  componentDidCatch (error, info) {
    // eslint-disable-next-line no-console
    console.log(info);
    // eslint-disable-next-line no-console
    console.log(error);
  }
  render () {
    // eslint-disable-next-line no-console
    return (
      <div className='login-style' >
        <div className='top-icon'>
          <QueueAnim type={['right', 'left']} ease={['easeOutQuart', 'easeInOutQuart']} delay={300}>
            <div className='top-header' key='logo'>
              <NavLink to='/login'>
                <img alt='' className='top-logo' key='top-logo' src={svgIcon} />
                <span className='top-title' key='top-title'>Jack Qian`s BLOG</span>
              </NavLink>
            </div>
            <p className='top-desc' key='title'>Jack Qian 一个走在全栈路上的小小程序猿</p>
            <div className='bottom-title' key='bottom'>
              <div key='bottom'>
                <h3 key='bottom-words'>The Future Belongs To Us</h3>
                <div className='bottom-title-line' key='bottom-title-line'>
                  <div className='bottom-title-line-animation' key='bottom-title-line-animation'></div>
                </div>
              </div>
            </div>
          </QueueAnim>
        </div>
      </div>
    );
  }
}
// Home.propTypes = {
// 	history: PropTypes.object
// 	cancelInfo: PropTypes.object,
// 	memo: PropTypes.string.isRequired,
// 	itemList: PropTypes.array.isRequired,
// 	fetchUser: PropTypes.func.isRequired,
// 	demoSetState: PropTypes.func.isRequired
// };

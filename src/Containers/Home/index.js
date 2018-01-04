// import { Component } from 'react-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';
// import { demoSetState, change } from '../../Action/index';
import style from './index.less';
import svgIcon from '../../Static/Svg/adminIcon.svg';

@withRouter

class Home extends Component {
  state = {
    show: false
  }
  componentWillMount () {
    this.setState({ show: true });
  }
  componentWillUnmount () {
  }
  render () {
    return (
      <div className='login-style' >
        <div className='top-icon'>
          <QueueAnim type={['right', 'left']} ease={['easeOutQuart', 'easeInOutQuart']}>
            {
              this.state.show ? [
                <div className='top-header' key='logo'>
                  <NavLink to='/login'>
                    <img alt='' className='top-logo' src={svgIcon} />
                    <span className='top-title'>Jack Qian`s BLOG</span>
                  </NavLink>
                </div>,
                <p className='top-desc' key='title'>Jack Qian 一个走在全栈路上的小小程序猿</p>,
                <div className='bottom-title' key='bottom'>
                  <div>
                    <h3>The Future Belongs To Us</h3>
                    <div className='bottom-title-line'>
                      <div className='bottom-title-line-animation'></div>
                    </div>
                  </div>
                </div>] : null
            }
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
function mapStateToProps (state) {
  return {
    // isAuth: state.App.isAuth
  };
}
function mapDispatchToProps (dispatch) {
  return {
    // change: bindActionCreators(change, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

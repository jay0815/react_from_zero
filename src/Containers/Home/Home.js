import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';
import { login } from '../../Action/login';
import './index.less';
import svgIcon from '../../Static/Svg/adminIcon.svg';
import DemoItem from '../../Component/DemoComponent';


class Home extends Component {
  state = {
    dataList : [
      { key : 0, num: 0 },
      { key : 1, num: 1 },
      { key : 2, num: 2 },
      { key : 3, num: 3 },
      { key : 4, num: 4 },
      { key : 5, num: 5 },
      { key : 6, num: 6 }
    ]
  }
  componentDidCatch (error, info) {
    // eslint-disable-next-line no-console
    console.log(info);
    // eslint-disable-next-line no-console
    console.log(error);
  }
  addDataList = (e) => this.setState( ({dataList}) => ({ dataList: [...dataList, {
    key: dataList.length+1, num: dataList.length+1
  }] }) )

  login = () => this.props.login();

  render () {
    console.log(this.props);
    // eslint-disable-next-line no-console
    return (
      <div className='login-style' >
        <button onClick={this.login}>add</button>
        <div className='top-icon'>
          {
            this.state.dataList.map((item) => <DemoItem index={item.key} num={item.num}/>)
          }
          {/* <QueueAnim type={['right', 'left']} ease={['easeOutQuart', 'easeInOutQuart']} delay={300}>
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
          </QueueAnim> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  login: bindActionCreators(login, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
// Home.propTypes = {
// 	history: PropTypes.object
// 	cancelInfo: PropTypes.object,
// 	memo: PropTypes.string.isRequired,
// 	itemList: PropTypes.array.isRequired,
// 	fetchUser: PropTypes.func.isRequired,
// 	demoSetState: PropTypes.func.isRequired
// };

import React, { Component } from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { login, change } from '../../Action/login';
import './index.less';
import adminIcon from '../../Svg/adminIcon.svg';

const {
	Header, Footer, Sider, Content
} = Layout;


class Login extends Component {
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
							<img alt='' className='top-logo' src={adminIcon} />
							<span className='top-title'>Jack Qian</span>
						</NavLink>
					</div>
				</div>
				<p>
					<label htmlFor='name'>name</label>
					<input type='text' name='name' id='name' value={this.props.name} onChange={this.nameChange} />
				</p>
				<p>
					<label htmlFor='password'>password</label>
					<input type='password' name='password' id='password' value={this.props.password} onChange={this.passwordChange} />
				</p>
				<button
					onClick={() => {
						this.props.login();
					}}
					disabled={this.props.name !== '' && this.props.password !== ''}
				>
				entry
				</button>
			</div>
		);
	}
}
Login.propTypes = {
	// cancelInfo: PropTypes.object,
	name: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	// isAuth: PropTypes.bool.isRequired,
	// itemList: PropTypes.array.isRequired,
	// fetchUser: PropTypes.func.isRequired,
	change: PropTypes.func.isRequired,
	login: PropTypes.func.isRequired
};
const mapStateToProps = (state) => {
	return {
		name: state.Login.name,
		password: state.Login.password,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		login: bindActionCreators(login, dispatch),
		change: bindActionCreators(change, dispatch),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

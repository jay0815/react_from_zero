import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { login, change } from '../../Action/login';


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
		console.log('nameChange', value);
		this.props.change({ name: value });
	}
	passwordChange = (value) => {
		console.log('passwordChange', value);
		this.props.change({ password: value });
	}
	render () {
		return (
			<div>
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
						// console.log('start');
						// this.props.('start');
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

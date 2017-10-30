import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { hashHistory } from 'react-router';
import './index.less';
import { demoSetState, change, login } from '../../Action/index';


class App extends Component {
	componentWillMount () {
	}
	render () {
		// console.log(this.props.demoSetState());
		return (
			<div>
				<NavLink to='/Home'>Go Home</NavLink>
				<button
					style={{ width: '80px' }}
					onClick={() => {
						console.log('login');
						this.props.login();
					}}
				>
					831
				</button>
				<button
					className='button-style'
					style={{ color: 'cornflowerblue' }}
					onClick={() => {
						console.log('start');
						this.props.change('start');
					}}
				>
					2333
				</button>
				<p>{this.props.isAuth ? 'hello,world' : 'no premission'}</p>
			</div>
		);
	}
}
App.propTypes = {
	// cancelInfo: PropTypes.object,
	// memo: PropTypes.string.isRequired,
	isAuth: PropTypes.bool.isRequired,
	// itemList: PropTypes.array.isRequired,
	// fetchUser: PropTypes.func.isRequired,
	change: PropTypes.func.isRequired,
	login: PropTypes.func.isRequired
};
function mapStateToProps (state) {
	return {
		isAuth: state.App.isAuth
	};
}
function mapDispatchToProps (dispatch) {
	return {
		login: bindActionCreators(login, dispatch),
		change: bindActionCreators(change, dispatch),
		demoSetState: bindActionCreators(demoSetState, dispatch),
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

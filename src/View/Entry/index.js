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
						this.props.demoSetState();
					}}
				>
					456
				</button>
				<button
					className='button-style'
					style={{ color: 'cornflowerblue' }}
					onClick={() => {
						this.props.change('start');
					}}
				>
					2333
				</button>
				<p>{this.props.isAuth ? this.props.word : 'no premission'}</p>
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
	word: PropTypes.string.isRequired,
	change: PropTypes.func.isRequired,
	demoSetState: PropTypes.func.isRequired
};
function mapStateToProps (state) {
	return {
		isAuth: state.App.isAuth,
		word: state.App.word
	};
}
function mapDispatchToProps (dispatch) {
	return {
		change: bindActionCreators(change, dispatch),
		demoSetState: bindActionCreators(demoSetState, dispatch)
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { hashHistory } from 'react-router';
import { demoSetState } from '../Action/index';


class App extends Component {
	componentWillMount () {
	}
	render () {
		return (
			<div>
				<button onClick={() => {
					console.log(123);
					this.props.demoSetState();
				}}
				>
					123
				</button>
				<p>{this.props.isAuth ? 'hello,world' : 'no premission'}</p>
			</div>
		);
	}
}
function mapStateToProps (state) {
	return {
		isAuth: state.App.isAuth
	};
}
function mapDispatchToProps (dispatch) {
	return {
		demoSetState: bindActionCreators(demoSetState, dispatch)
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

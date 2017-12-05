import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { Layout, Affix, Button, Menu } from 'antd';
import QueueAnim from 'rc-queue-anim';
// import './index.less';
// import { demoSetState, change, login } from '../../Action/index';

const {
	Header, Footer, Content, Sider
} = Layout;

@withRouter


export default class Photo extends Component {
	componentWillMount () {
	}
	render () {
		return (
			<div>
				Photo
			</div>
		);
	}
}
Photo.propTypes = {
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

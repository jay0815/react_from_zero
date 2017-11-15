import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink, withRouter, Route, Switch } from 'react-router-dom';
import { Layout, Affix, Button, Menu } from 'antd';
import QueueAnim from 'rc-queue-anim';
import './index.less';
import { demoSetState, change, login } from '../../Action/index';
import Record from '../Record';
import Photo from '../Photo';
import Translation from '../Translation';

const {
	Header, Footer, Content, Sider
} = Layout;


class App extends Component {
	componentWillMount () {
	}
	render () {
		return (
			<div className='entry-body'>
				<Layout>
					<Header className='app-header' >
						<div className='heard-css'>
							<div className='logo' />
							<Menu
								mode='horizontal'
								defaultSelectedKeys={['2']}
								style={{ lineHeight: '64px' }}
								onClick={(value) => { // value ={key: string, keyPath: Array, item: object, domEvent: Proxy}
									this.props.history.push(value.key);
								}}
							>
								{
									this.props.menuList.map((item, index) => {
										return (
											<Menu.Item key={'/Entry/' + item.link}>
												{item.name}
											</Menu.Item>
										);
									})
								}
							</Menu>
						</div>
					</Header>
					<Content key='Content'>
						<QueueAnim delay={300}>
							<div key='body'>
								<Switch>
									<Route strict={true} path='/Entry' component={Record} />
									<Route exact strict={true} path='/Entry/Photo' component={Photo} />
									<Route exact strict={true} path='/Entry/Translation' component={Translation} />
								</Switch>
							</div>
							<Affix key='Affix'>
								<Button
									type='primary'
									onClick={() => {
										// this.setState({ show : false });
										// console.log(this.props.history);
										this.props.history.push('/');
									}}
								>
										top
								</Button>
							</Affix>
						</QueueAnim>
					</Content>
					<Footer key='Footer' />
				</Layout>
			</div>
		);
	}
}
App.propTypes = {
	history: PropTypes.object,
	menuList: PropTypes.array.isRequired,
	// cancelInfo: PropTypes.object,
	// memo: PropTypes.string.isRequired,
	// isAuth: PropTypes.bool.isRequired,
	// itemList: PropTypes.array.isRequired,
	// fetchUser: PropTypes.func.isRequired,
	// word: PropTypes.string.isRequired,
	// change: PropTypes.func.isRequired,
	// demoSetState: PropTypes.func.isRequired
};
const mapStateToProps = (state) => {
	return {
		menuList: state.Entry.menuList,
		// isAuth: state.App.isAuth,
		// word: state.App.word
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		// change: bindActionCreators(change, dispatch),
		// demoSetState: bindActionCreators(demoSetState, dispatch)
	};
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

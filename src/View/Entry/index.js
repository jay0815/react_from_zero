import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { Layout, Affix, Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import './index.less';
import { demoSetState, change, login } from '../../Action/index';

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
					<Sider>
						<div>
							侧边栏
						</div>
					</Sider>
					<QueueAnim delay={300}>
						<Layout>
							<Header className='app-header' />
							<Content >
								<div>123</div>
								<Affix >
									<Button type='primary'
										onClick={() => {
										// this.setState({ show : false });
										// console.log(this.props.history);
										this.props.history.push('/');
									}}>top</Button>
								</Affix>
							</Content>
							<Footer />
						</Layout>
					</QueueAnim>
				</Layout>
			</div>
		);
	}
}
App.propTypes = {
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

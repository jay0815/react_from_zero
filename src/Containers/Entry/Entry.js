import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import QueueAnim from 'rc-queue-anim';
import './index.less';
import Record from '../Record';
import Photo from '../Photo';
import Translation from '../Translation';

const {
  Header, Footer, Content
} = Layout;

export default class Entry extends Component {
  state = {
    type: true
  }
  componentWillMount () {
    console.log(123);
  }
  componentDidCatch (error, info) {
    // eslint-disable-next-line no-console
    console.log(info);
    // eslint-disable-next-line no-console
    console.log(error);

  }
  render () {
    const {menuList} = this.props;
    return (
      <div className='entry-body'>
        <Layout>
          <Header className='app-header' >
            <div className='heard-css'>
              <div className='logo' />
              <Menu
                className='menutype'
                mode='horizontal'
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
                onClick={(value) => { // value ={key: string, keyPath: Array, item: object, domEvent: Proxy}
                  this.props.history.push(value.key);
                }}>
                {
                  typeof menuList !== undefined ? menuList.map((item) => {
                    return (
                      <Menu.Item key={`/Entry/${item.link}`} id={item.link}>
                        {item.name}
                      </Menu.Item>
                    );
                  }) : []
                }
              </Menu>
            </div>
          </Header>
          <Content key='Content'>
            <QueueAnim delay={300}>
              <div key='body'>
                <Switch>
                  <Route exact strict path='/Entry/Record' component={Record} />
                  <Route exact strict path='/Entry/Photo' component={Photo} />
                  <Route exact strict path='/Entry/Translation' component={Translation} />
                  {/* <Redirect to='/Entry/Record' /> */}
                </Switch>
              </div>
            </QueueAnim>
          </Content>
          <Footer key='Footer' />
        </Layout>
      </div>
    );
  }
}
Entry.propTypes = {
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

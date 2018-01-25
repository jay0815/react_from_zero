import React from 'react';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow, render, mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from '../../src/Containers/Home/index.js';
import Reducer from '../../src/Reducer';
import sinon from 'sinon';

const history = createHistory();
// 创建一个测试用的时候的store必须在创建的时候必须用combineReducers包裹一层，否则默认的state无法引导到测试组件的props。
const store = createStore(Reducer);
// 创建测试对象的时候，因为react-router 升级到了 4.0且用到了 withRouter，如果不想在测试的时候 要特意去除withRouter，必须在创建时加上 Router.
const provider = (<Provider store={store}><Router history={history}><Home /></Router></Provider>);

// 这个测试用的是Enayme的测试组件mount，即装载一个完成渲染的组件（组件），所以不存在componentWillMount
// 此时会返回一个对象，包含：
// getChildContext
// componentDidMount
// componentWillReceiveProps
// shouldComponentUpdate
// componentWillUnmount
// getWrappedInstance
// setWrappedInstance
// initSelector
// initSubscription
// onStateChange
// notifyNestedSubsOnComponentDidUpdate
// isSubscribed
// addExtraProps
// render
// componentWillUpdate
describe('render into document with store and use react test util', () => {
  it('API Example: at()', () => {
    sinon.spy(Home.prototype, 'componentDidMount');
    sinon.spy(Home.prototype, 'componentWillUnmount');
    const wrapper = mount(provider);
    expect(wrapper.find('Home')).to.have.length(1);//根据组件对外暴露的类名进行匹配（Component Display Name）
    // expect(wrapper.find('Home')).to.have.length(1) === expect(wrapper.find(Home)).to.have.length(1);
    // 根据组件本身进行匹配（Component Constructors）
    expect(wrapper.find('div.top-icon')).to.have.length(1);//根据组件css进行匹配(CSS Selectors)
    expect(Home.prototype.componentDidMount.calledOnce).to.equal(true);
    wrapper.update();
    expect(wrapper.find('Home').props().isAuth).to.have.equal(true);
    wrapper.unmount();//手动清除内存中的component对象
    expect(Home.prototype.componentWillUnmount.calledOnce).to.equal(true);
  });
  // it('calls componentDidMount', () => {
  //   sinon.spy(Home.prototype, 'componentDidMount');
  //   const wrapper = mount(provider);
  //   expect(Home.prototype.componentDidMount.calledOnce).to.equal(true);
  //   wrapper.unmount();//手动清除内存中的component对象
  // });
});

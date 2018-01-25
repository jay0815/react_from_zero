import React from 'react';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow, render, mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from '../../src/Containers/Home';
import Reducer from '../../src/Reducer';
import sinon from 'sinon';

const history = createHistory();
// 创建一个测试用的时候的store必须在创建的时候必须用combineReducers包裹一层，否则默认的state无法引导到测试组件的props。
const store = createStore(Reducer);
// 创建测试对象的时候，因为react-router 升级到了 4.0且用到了 withRouter，如果不想在测试的时候 要特意去除withRouter，必须在创建时加上 Router.
const provider = (<Provider store={store}><Router history={history}><Home /></Router></Provider>);

// ReactTestUtils example
// const app = ReactTestUtils.renderIntoDocument(provider);
// const divisions = ReactTestUtils.scryRenderedDOMComponentsWithTag(app, 'div');

// enzyme example
const wrapper = mount(provider); // length = 1
// 这个测试用的是react官方的测试组件
describe('render into document with store and use react test util', () => {
  it('try to render into document by React（尝试在文本中渲染react）', () => {
    // react 自带测试套件
    const app = ReactTestUtils.renderIntoDocument(provider);
    const divisions = ReactTestUtils.scryRenderedDOMComponentsWithTag(app, 'div');
    expect(divisions.length).to.equal(3);
    wrapper.unmount();
  });
});

// // 这个测试用的是enzyme的测试组件
// describe('render into document with store and use enzyme', () => {
// 	it('try to render into document by enzyme', () => {
// 		// enzyme 测试组件
// 		// const wrapper = mount(provider);
// 		expect(wrapper.find('.App')).to.have.length(1);
// 	});
// });

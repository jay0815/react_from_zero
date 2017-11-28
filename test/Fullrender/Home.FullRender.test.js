import React from 'react';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow, render, mount } from 'enzyme';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Home from '../../src/Containers/Home';
import Reducer from '../../src/Reducer';

// 创建一个测试用的时候的store必须在创建的时候必须用combineReducers包裹一层，否则默认的state无法引导到测试组件的props。
const store = createStore(Reducer);
const provider = (<Provider store={store}><Home /></Provider>);
// ReactTestUtils example
const app = ReactTestUtils.renderIntoDocument(provider);
const divisions = ReactTestUtils.scryRenderedDOMComponentsWithTag(app, 'div');
// console.log('app', app);
// console.log('divisions', divisions);

// enzyme example
const wrapper = mount(provider);
// console.log('wrapper', wrapper);

// 这个测试用的是react官方的测试组件
describe('render into document with store and use react test util', () => {
	it('try to render into document by React', () => {
		// react 自带测试套件
		// const app = ReactTestUtils.renderIntoDocument(provider);
		// const divisions = ReactTestUtils.scryRenderedDOMComponentsWithTag(app, 'div');
		expect(divisions.length).to.equal(5);
	});
});

// 这个测试用的是enzyme的测试组件
describe('render into document with store and use enzyme', () => {
	it('try to render into document by enzyme', () => {
		// enzyme 测试组件
		// const wrapper = mount(provider);
		expect(wrapper.find('.App')).to.have.length(1);
	});
});

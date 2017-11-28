import React from 'react';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow, render, mount } from 'enzyme';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


import Home from '../src/View/Home';
import Reducer from '../src/Reducer';

const TodoList = Reducer.TodoList;

// 创建一个测试用的时候的store必须在创建的时候必须用combineReducers包裹一层，否则默认的state无法引导到测试组件的props。
const store = createStore(Reducer);
const provider = (<Provider store={store}>
  <Home />
</Provider>);

// in your test:
//
function MyComponent() {
  return (
    <div>
      <span className="heading">Title</span>
    </div>
  );
}
const wrapper = shallow(<Home />);

describe('Shallow Test', ( ) => {

	it('Home\'s Shallow Test', function () {
	    expect(wrapper.prop('children').type).to.equal('div');
  });

});
// describe('Counter Test', ( ) => {
//
// 	it('Home\'s render Test', function () {
// 	const renderer = new ShallowRenderer();
// 	renderer.render(<Home />);
// 	const app = renderer.getRenderOutput();
//     // expect(app.props.type).to.equal('div');
//     expect(app.type).to.equal('div');
//   });
//
// });
// describe('Counter Test', ( ) => {
//
// 	it('Home\'s mount Test', function () {
// 	const renderer = new ShallowRenderer();
// 	renderer.render(<Home />);
// 	const app = renderer.getRenderOutput();
//     // expect(app.props.type).to.equal('div');
//     expect(app.type).to.equal('div');
//   });
//
// });

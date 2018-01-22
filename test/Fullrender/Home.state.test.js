import React from 'react';
import { expect } from 'chai';
import { shallow, render, mount } from 'enzyme';
import Home from '../../src/Containers/Home/Home.js';
import sinon from 'sinon';

describe('render into document without store', () => {
  it('API Example: state()、find()', () => {
    const wrapper = mount(<Home/>);
    expect(wrapper.state('show')).to.have.equal(false);
    wrapper.unmount();//手动清除内存中的component对象
  });
});

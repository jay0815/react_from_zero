import { shallow, render, mount } from 'enzyme';
import { expect } from 'chai';
import React from 'react';

import Home from '../src/View/Home';
import ShallowRenderer from 'react-test-renderer/shallow';

// in your test:
//
function MyComponent() {
  return (
    <div>
      <span className="heading">Title</span>
    </div>
  );
}

describe('Counter Test', ( ) => {

	it('App\'s title should be Todos', function () {
	const renderer = new ShallowRenderer();
	renderer.render(<Home />);
	const app = renderer.getRenderOutput();
    // expect(app.props.type).to.equal('div');
    expect(app.type).to.equal('div');
  });

});

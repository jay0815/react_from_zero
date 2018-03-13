import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class ErrorBoundary extends Component {
  state = {
    hashError: false
  }
  componentDidCatch (error, info) {
    this.setState({ hasError: true });
    // eslint-disable-next-line no-console
    console.log(error, info);
  }
  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
ErrorBoundary.propTypes = {
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

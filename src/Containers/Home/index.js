import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from './Home.js';
// import { demoSetState, change } from '../../Action/index';

const mapStateToProps = (state) => {
  return {
    isAuth: state.Entry.isAuth
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    // change: bindActionCreators(change, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

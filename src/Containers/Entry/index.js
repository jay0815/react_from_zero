import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { demoSetState, change } from '../../Action/index';
import Entry from './Entry.js'
const mapStateToProps = (state) => {
  return {
    menuList: state.Entry.menuList,
    // isAuth: state.App.isAuth,
    // word: state.App.word
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    demoSetState: bindActionCreators(demoSetState, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Entry);

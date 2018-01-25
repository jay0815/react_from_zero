import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login, change } from '../../Action/login';
import Login from './Login.js';

const mapStateToProps = (state) => {
  return {
    name: state.Login.name,
    password: state.Login.password,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    change: bindActionCreators(change, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

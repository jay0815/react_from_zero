import types from '../Store/types';
/**
 * demo
 * @param {[type]} param [description]
 */
export const demoSetState = () => {
  return (dispatch, getState) => {
    dispatch({
      type: types.SET_APP_STATE
    });
  };
}
export const change = (param) => {
  return (dispatch, getState) => {
    dispatch({
      type: types.CHANGE,
      params: {
        start: param === 'start',
        stop: param === 'stop',
      }
    });
  }
}

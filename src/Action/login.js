import types from '../Store/types';
import { get_login } from '../Api/index';
import { newAPi } from '../Api/index';

export function login (history) {
  return (dispatch, getState) => {
    const params = {
      username: 'bear',
      password: '123456',
      url: '123456789'
    };

    dispatch({
      type: types.LOGIN,
      payload: {
        promise: newAPi.post('login', {
          data: params
        }).then((data)=>{
          history.push('Entry')
          return data
        }

        )
      }
    });
    // dispatch({
    //   type: types.LOGIN,
    //   payload: {
    //     promise: get_login(params).then((data) => {
    //       return data;
    //     })
    //   }
    // });
  };
}
export function change (param) {
  return (dispatch, getState) => {
    dispatch({
      type: types.SET_LOGIN_INFO,
      params: param
    });
  };
}

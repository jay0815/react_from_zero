import Api from './api';
import { Ajax } from '../Util/Ajax';
const api = new Api({
  baseURI: objBaseURI(),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    'timeout': '10000',
  }
});

function objBaseURI () {
  switch (process.env.NODE_ENV) {
  case 'test': return 'testObjBaseURI';
  case 'development': return 'developmentObjBaseURI';
  case 'staging': return 'stagingObjBaseURI';
  case 'production': return 'productionObjBaseURI';
  default: return 'defaultObjBaseURI';
  }
}

export const newAPi = new Api({
  baseURI: '/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
},
});


function AjaxServer (type, path, params, data) {
  return api[type](path, { params, data: data })
}
export async function get_login (params) {
  return AjaxServer('get', '/login',params);
}

export const AjaxAction = (method,path,param,data) => {
  let AjaxParam = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: method,
    url: objBaseURI() + path,
    param: param,
    data: data
  }
  return Ajax(AjaxParam)
}

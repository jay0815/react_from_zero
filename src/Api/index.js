import Api from './api';
// import fetchApi from './fetchApi';

function objBaseURI () {
	switch (process.env.NODE_ENV) {
	case "test": return "testObjBaseURI";
	case "development": return "developmentObjBaseURI";
	case "staging": return "stagingObjBaseURI";
	case "production": return "productionObjBaseURI";
	default: return "defaultObjBaseURI";
	}
}

const api = new Api({
	baseURI: objBaseURI(),
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/x-www-form-urlencoded',
		'timeout': '10000',
	}
});


// const fetchapi = new fetchApi({
// 	baseURI: "http://120.76.222.26:8002",
// 	headers: {
// 			'Accept': 'application/json',
// 			'Content-Type': 'application/x-www-form-urlencoded',
// 			'timeout': '10000',
// 	}
// });
// function newFetch (type, path, params, data) {
// 	return fetchApi(type, path, { params , data: data})
// }

function AjaxServer (type, path, params, data) {
	return api[type](path, { params , data: data})
}
export async function get_login(params) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
            code: "0",
            message: 'success',
            content: [
              {
                  name:"123",
                  sex:"man",
                  address:"中国福建省厦门市",
                  token:'ae78ds4q787fgh46523dsda2321asada'
              }
            ]
        });
      }, 1000);
    });
}

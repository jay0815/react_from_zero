// import jsdom from 'jsdom';
// const { JSDOM } = jsdom;
//
// if (typeof document === 'undefined') {
// 	const dom = new JSDOM(``);
// 	global.document = dom.window.document;
// 	global.requestAnimationFrame = global.requestAnimationFrame || function requestAnimationFrame(callback) {
// 		setTimeout(callback, 0);
// 	};
// 	global.window = dom.window;
// 	global.navigator = global.window.navigator;
// }
console.log(process.env.NODE_ENV);
// 从jsdom 8.0.1升级到10.1.0
// jsdom 10.1.0修改了部分api

// const jsdom = require('jsdom').jsdom;

// 获取JSDOM方法，用于生成JSDOM对象
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const exposedProperties = ['window', 'navigator', 'document'];
// import 'core-js/es6/map';
// import 'core-js/es6/set';



// 生成JSDOM对象
const dom = new JSDOM(``);

/*
global.document = jsdom('');
global.window = document.defaultView;
*/
// 获取window 对象
global.window = dom.window;
// 获取 global 对象
global.document = window.document;


global.requestAnimationFrame =
  global.requestAnimationFrame || function requestAnimationFrame(callback) {
    setTimeout(callback, 0);
  };

/*
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});
*/
Object.keys(dom.window).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = dom.window[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};

const documentRef = document;

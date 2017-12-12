// 获取JSDOM方法，用于生成JSDOM对象
import { JSDOM } from 'jsdom';
import { configure } from 'enzyme';
// 当使用 最新版本的 enzyme的时候，官方要求在使用 enzyme前，使用对应react版本的适配器。
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
console.log(process.env.NODE_ENV);
// 生成JSDOM对象
const dom = new JSDOM('<!doctype html><html><body></body></html>');

const { window } = dom;

function copyProps (src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}

global.window = window;

global.document = window.document;

global.requestAnimationFrame = global.requestAnimationFrame || function requestAnimationFrame(callback) { setTimeout(callback, 0); };

global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

// 获取window 对象
// global.window = dom.window;
// 获取 global 对象
// global.document = window.document;
//
// global.requestAnimationFrame = global.requestAnimationFrame || function requestAnimationFrame(callback) { setTimeout(callback, 0); };
//
// Object.keys(dom.window).forEach((property) => {
//   if (typeof global[property] === 'undefined') {
//     exposedProperties.push(property);
//     global[property] = dom.window[property];
//   }
// });
//
// global.navigator = {
//   userAgent: 'node.js',
// };
//
// const documentRef = document;

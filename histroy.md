### 2017.10.30
- npm start 支持 dom 与 redux同时热加载
- 加入编译后浏览器自动开启的功能
- 因为transform-class-properties报错调整了babel结构
  * babel v6.x 中 env判断追加presets选项时,自定义的env会变成最后加载，产生transform-class-properties报错。为了便于在实际生产环境中使用，因此采用了一个不够优雅的配置。
  * https://github.com/babel/babel/issues/6604 这个issue 中有人提到了相同问题，babel作者表示会在 v7中加入 .babelrc.js 的引入配置
- 对前几天加入的postcss-loader 进行了验证，应该可以解决浏览器显示的兼容的问题？！

### 2017.10.31
- npm start 修复浏览器路由跳转bug
  * (router问题) https://segmentfault.com/q/1010000008219479

### 2017.11.02
- 加入 cross-env 库，支持Mac、Win 跨平台设置环境变量
  * old：export NODE_ENV=test && scrpit
  * new: cross-env scrpit

### 2017.11.28
- 加入 duplicate-package-checker-webpack-plugin,协助分析重复模块，减小打包体积
- 打包时加入 --json > analyze.json 生成打包分析文件，可以通过
  * https://alexkuz.github.io/webpack-chart/
  * http://webpack.github.io/analyse/
  * 参考：https://www.cnblogs.com/libin-1/p/7027164.html
- 解决使用react-router 4带来的测试用例写法问题（引入了react-router-reducer v5版，通过自监控history，去掉了@router的表示）
  * 如果直击使用 router 而不是继承自 给定的router组件(MemoryRouter,BrowserRouter,HashRouter,则会报错：Cannot read property 'location' of undefined）
- babelrc中使用公共 plugins 设置 transform-decorators-legacy、transform-class-properties ，会报错：
	npm install babel-plugin-transform-decorators-legacy --save-dev
	and add the following line to your .babelrc file:
	```
{
		"plugins": ["transform-decorators-legacy"]
}
  ```
	* 在babel的issue中也有人提出这个问题: https://github.com/babel/babel/issues/6858
	* 暂时只能使用很丑的写法，在每个环境下都配置。
- mocha 新写法
  * https://github.com/mochajs/mocha/wiki/compilers-deprecation
  * future version will remove --compilersbabel-core/register ; instead of --require babel-core/register

### 2018.01.17
- 重写了ReadMe
- 调整了packjson的依赖位置，解决了cnpm install 后启动报依赖不存在的错误
- hashHistory 通过/#/ 来达到与 browerHistory 区分的目的。当手动修改url的时候，会造成页面刷新。
  * hashHistory 下对路由的修改如果仅限于 /#/ 后面的内容（不包含/#/）则页面不会刷新，reducer不会丢失。这个应该就是hash实现的内部机制
  * browerHistory 则不存在这个功能
- fix error ：页面代码中使用react-dom 替换 react 包出现的问题
```
  Super expression must either be null or a function, not undefined
```
- fix error ：测试代码中使用react-dom 替换 react 包出现的问题
```
_reactDom2.default.createElement is not a function
```

### 2018.01.18
- 使用mount 是无法获取componentWillMount 生命周期的。（因为mount 是已经渲染完成了，这他妈不是废话吗 >……<）

### 2018.01.22
- 通过改变代码结构来进行对state的测试
```
Containers的结构：
src ->
   Containers ->
     模块名xx(eg:Home) ->
        xx.js(页面内容模板)+index.js(用于组合reducer、action 和 模板)+index.less
```
### 2018.01.23
- 测试时使用antd的模块都会报无法使用import的问题，导致测试中断，初步分析认为是无法对深层次的import进行babel转译
  准备尝试先编译，再测试的方式。
```
(function (exports, require, module, __filename, __dirname) { import _defineProperty from 'babel-runtime/helpers/defineProperty';
                                                              ^^^^^^
SyntaxError: Unexpected token import
```
### 2018.01.24
- 使用babel-preset-es2015 替换 env，无效
- 重新安装 babel-helper-module-imports、 babel-types 无效
- 通过加入testHelp.js(声明绕过编译的文件)，解决了 import 的报错问题，但是又出现了 export 的报错问题
```
export var placements = {
^^^^^^
SyntaxError: Unexpected token export
```
- 使用 babel-plugin-add-module-exports 对export编译，无效
- 通过testHelp.js(追加更多的需要绕过的文件)，解决了 export 的报错问题. 但是这种方法很不合理，应该是mocha的问题，后续会在其git上提issue的

### mocha info
- --check-leaks               //检测全局变量造成的内存泄漏问题
- --full-trace                //展示完整的错误栈信息MMM
- --compilers <ext>:<module>,...  //使用给定的模块来编译文件
- --debug-brk                 //启用nodejs的debug模式
- --es_staging                //启用全部staged特性
- --preserve-symlinks                     告知模块加载器在解析和缓存模块的时候，保留模块本身的软链接信息
- --icu-data-dir                          include ICU data
- --inline-diffs              用内联的方式展示actual/expected之间的不同
- --inspect                   激活chrome浏览器的控制台
- --interfaces                展示所有可用的接口
- --no-deprecation            不展示warning信息
- --no-exit                   require a clean shutdown of the event loop: mocha will not call process.exit
- --no-timeouts               禁用超时功能
- --opts <path>               定义option文件路径
- --perf-basic-prof           启用linux的分析功能
- --prof                      打印出统计分析信息
- --recursive                 包含子目录中的测试用例
- --reporters                 展示所有可以使用的测试报告的名称
- --retries <times>           设置对于失败的测试用例的尝试的次数
- --throw-deprecation         无论任何时候使用过时的函数都抛出一个异常
- --trace                     追踪函数的调用过程
- --trace-deprecation         展示追踪错误栈
- --use_strict                强制使用严格模式
- --watch-extensions <ext>,... --watch监控的扩展
- --delay                     异步测试用例的延迟时间

- ~~TODO：常用的库，通过cdn的方式引入，而不再走webpack编译，大大提升了编译和打包时间（）~~

# this is a react falsework demo
> react v15(future will be v16) + redux + react-router v4 + fetch + redux-thunk + react-hot-loader + nodejs + es6 + webpack3

### 2017.10.28
- 根据redux官网demo 自定义编译界面年月显示

### 2017.10.30
- npm start 支持 dom 与 redux同时热加载
- 加入编译后浏览器自动开启的功能
- 因为transform-class-properties报错调整了babel结构
- （babel v6.x 中 env判断追加presets选项时,自定义的env会变成最后加载，产		生transform-class-properties报错。为了便于在实际生产环境中使用，因此采用了一个不够优雅的配置。
	https://github.com/babel/babel/issues/6604 这个issue 中有人提到了相同问题，babel作者表示会在 v7中加入 .babelrc.js 的引入配置）
- 对前几天加入的postcss-loader 进行了验证，应该可以解决浏览器显示的兼容的问题？！

### 2017.10.31
- npm start 修复浏览器路由跳转bug
  router问题 https://segmentfault.com/q/1010000008219479

### 2017.11.02
- 

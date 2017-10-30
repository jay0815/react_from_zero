# react_from_zero
## this is a react falsework demo
> react v15(future will be v16) + redux + react-router v4 + fetch + redux-thunk + react-hot-loader + nodejs + es6 + webpack3

1. >集成热加载（react-hot-loader）:
	当在babelrc有配置 react-hot-loader/babel时，不要在webpack的js加载器中再使用
	react-hot-loader/webpack,否则将导致source-map模式无法使用（如果你是使用的eval模式，请忽略本条记录）
	```
	npm install --save react-hot-loader
	```

2. >集成自动刷新（webpack-hot-middleware）:
	webpack-hot-middleware使用时放在需要使用热更新的文件处，这里我加入了reload=true参数，意思是当webpack有动态编译时更新页面。 更多详细配置参考:https://github.com/glenjamin/webpack-hot-middleware
	```
	npm install --save-dev webpack-hot-middleware
	```

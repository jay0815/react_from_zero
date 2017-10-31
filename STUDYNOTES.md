# Study Notes

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
3. >集成dev-middleware完善自动刷新功能（webpack-dev-middleware）:
	```
	npm install --save-dev webpack-dev-middleware
	```
4. >derServer集成(connect-history-api-fallback)
	因为npm start的原理是在node中使用webpack-dev-middleware加载在内存中热编译的文件。当浏览器地址发生改变时，会被node拦截当做一次请求。
	但是实际是没有生成静态文件的，无法使用重定向。
	所以在node中集成 connect-history-api-fallback。对node请求进行区分，对请求直接修改请头内容。
	https://segmentfault.com/a/1190000007890379

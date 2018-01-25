# this is a react falsework demo
> react (v16) + redux + react-router v4 + redux-thunk + react-hot-loader + nodejs + es6 + webpack3 + https

## 关于本脚手架
###### 使用nodeJS作为后台，同时支持 http 和 https 两种 restful api 的转发(https的转发有待完善)
###### 使用了懒加载 + 二次压缩处理，提升页面构建资源加载速度
###### webpack.babel.xx.js 隐藏菜单不能用了。后期考虑查明下原因。> _ < '' 不能在webpack里使用 import了



## 使用指南
1. 推荐使用cnpm install 安装
1. npm start：快速启动项目
2. npm run build-dev：使用webpack watch 模式的‘伪’热加载
3. npm run build-analyze：得到打包分析json。将得到的json文件上传，即可在线查看图形分析报告。
  * https://alexkuz.github.io/webpack-chart/ http://webpack.github.io/analyse/
4. npm run build：用于部署线上正式环境的打包。
5. npm run test：单元测试命令
6. npm run coverage：覆盖测试的命令


## 覆盖测试报告说明指南
- 语句覆盖率（statement coverage）：是否每个语句都执行了？
- 分支覆盖率（branch coverage）：是否每个if代码块都执行了？
- 函数覆盖率（function coverage）：是否每个函数都调用了？
- 行覆盖率（line coverage）：是否每一行都执行了？

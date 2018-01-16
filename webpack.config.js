const path = require('path');
// import webpack from 'webpack';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import precss from 'precss';
// import autoprefixer from 'autoprefixer';
// import rucksackCss from 'rucksack-css';
// import ConsoleLogOnBuildWebpackPlugin from './normal';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const rucksackCss = require('rucksack-css');
const ConsoleLogOnBuildWebpackPlugin = require('./normal');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const theme = require('./theme.js');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const HappyPack = require('happypack');
const CompressionPlugin = require("compression-webpack-plugin");
const happyThreadPool = HappyPack.ThreadPool({ size: 4 });

// import px2rem from 'postcss-pxtorem';
// var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var autoprefixer = require('autoprefixer');
// var pxtorem = require('postcss-pxtorem'); //移动端适配使用
module.exports = {
  // debug: true, loaders 的 debug 模式将在 webpack 3 或后续版本中取消。
  entry: {
  // 文件入口配置
    index: './src/index',
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
      'redux',
      'redux-logger',
      // 'redux-saga',
      'redux-thunk',
    ]
    // 为了优化，切割代码，提取第三方库（实际上，我们将会引入很多第三方库）后面会考虑使用cdn
  },
  output: {
    // 文件输出配置
    path: path.join(__dirname, 'dist'),
    // 输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它.
    publicPath: '/',
    // 模板、样式、脚本、图片等资源对应的server上的路径
    // filename: 'index.js',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    // 命名生成的JS
  },
  plugins: [
		// new webpack.optimize.OccurrenceOrderPlugin(), webpack 2 or 3 及 更高版本中 OccurrenceOrderPlugin 被默认加载
		new HtmlWebpackPlugin({
			template: './Template/index.html',
			// html模板的路径

			filename: 'index.html',
			// 文件名以及文件将要存放的位置
			favicon: './Template/booking.ico',
			// favicon路径
			inject: 'body',
			// js插入的位置，true/'head'  false/'body'
			// chunks: ['vendor', 'index'],
			// 指定要排除的chunk，根据entry的key配置，不配置就会过滤所有页面的资源
			//  chunks: ['vendor', 'index' ],
			// 指定引入的chunk，根据entry的key配置，不配置就会引入所有页面的资源

			hash: false,
			// 这样每次客户端页面就会根据这个hash来判断页面是否有必要刷新
			// 在项目后续过程中，经常需要做些改动更新什么的，一但有改动，客户端页面就会自动更新！
			showErrors: true,
			// 是否将错误信息输出到html页面中
			minify: {
				// 压缩HTML文件
				removeComments: true,
				// 移除HTML中的注释

				collapseWhitespace: true
				// 删除空白符与换行符
			}
		}),
		// webapck 会给编译好的代码片段一个id用来区分
		// 而这个插件会让webpack在id分配上优化并保持一致性。
		// 具体是的优化是：webpack就能够比对id的使用频率和分布来得出最短的id分配给使用频率高的模块
		new webpack.optimize.UglifyJsPlugin({
			// 压缩代码
			output: {
				comments: false, // remove all comments
			},
			compressor: {
				warnings: false,
				drop_debugger: true,
				drop_console: false
			}
		}),

		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
			__DEV__: false
		}),
		// 很多库的内部，有process.NODE_ENV的判断语句，
		// 改为production。最直观的就是没有所有的debug相关的东西，体积会减少很多

		new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new ExtractTextPlugin({ filename: '[name].[chunkhash].css', allChunks: true, disable: false }),
		new webpack.LoaderOptionsPlugin({
			debug: false
		}),
		new DuplicatePackageCheckerPlugin(),
    new ConsoleLogOnBuildWebpackPlugin(),
		new HappyPack({
	      id: 'js',
	      threadPool: happyThreadPool,
	      loaders: [ 'babel-loader' ]
    })
    // new CompressionPlugin({
    //   test: /\.(js|css)$/,
    //   asset: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   threshold: 10240,
    //   minRatio: 0.8
    // })
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: 'happypack/loader?id=js'
				// use: [{
				// 	loader: 'babel-loader'
				// }]
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader' // translates CSS into CommonJS
						},
						{
							loader: 'postcss-loader', // translates CSS into CommonJS
							options: {
								plugins: () => [autoprefixer({
									browsers: ['last 2 versions', 'ie>8']
								}), rucksackCss()],
							}
						},
						{
							loader: 'less-loader'// compiles Less to CSS
						}
					]
				})
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader' // translates CSS into CommonJS
						},
						{
							loader: 'less-loader', // compiles Less to CSS
							options: {
								sourceMap: true,
								modifyVars: theme
							}
						}
					]
				}),
				include: /node_modules/,
			},
			{
				test: /\.(otf|eot|ttf|woff|woff2).*$/,
				use: [{
					loader: 'url-loader?limit=10000'
				}]
			},
			{
				test: /\.(gif|jpe?g|png|ico)$/,
				use: [{
					loader: 'url-loader?limit=10000'
				}]
			},
			{
				test: /\.(svg).*$/i,
				// include: svgSpriteDirs, // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
				use: [{
					loader: 'url-loader?limit=1',
					options: {
						name: '[path][name].[ext]'
					}
				}]
			}
		]
	}
};

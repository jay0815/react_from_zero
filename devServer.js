const webpack = require('webpack');
const config = require('./webpack.config-dev.js');
const opn = require('opn');
const express = require('express'),
  bodyParser = require('body-parser'),
	app = express();
  request = require('request'),
  path = require('path'),
  log4js = require('log4js'),
  fs = require('fs'),
  EventEmitter = require('events').EventEmitter;
var jsonParser = bodyParser.json();

var _resolve;
var readyPromise = new Promise(resolve => {
  _resolve = resolve
});
/**
 * 判断是否有logs文件夹，没有的话自动加上，防止下面日志文件报错
 */
if (!fs.existsSync('logs')) {
  fs.mkdirSync('logs')
} else {
  if (!fs.statSync('logs').isDirectory()) {
    throw('there has a file <<"logs">>, place rename or delete is.')
  }
}
/**
 * log4js的最新配置
 */
log4js.configure({
    appenders: {
        out: { type: 'console' },
        result: { type: 'dateFile', filename: 'logs/normal.log',layout: {type: 'basic'},'pattern':'.yyyy-MM-dd.log', alwaysIncludePattern:true},
        default: { type: 'dateFile', filename: 'logs/default.log', layout: {type: 'basic'},'pattern':'yyyy-MM-dd.log',alwaysIncludePattern:true},
    },
    categories: {
        default: {
            appenders: ['out', 'default'], level: 'info'
        },
        result: {
            appenders: ['result'], level: 'info'
        },
    }
});
const normalLog = log4js.getLogger('normal');
app.use(log4js.connectLogger(normalLog, {level: 'trace', format: ':method :url'}));
/**
 * 配置使用wepack自编译
 */
const compiler = webpack(config);
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
});
app.use(require('connect-history-api-fallback')());
app.use(devMiddleware);
app.use(require('webpack-hot-middleware')(compiler));
/**
 * 设置环境变量
 */
let env = process.env.NODE_ENV;
const isProduction = env === 'production';
const isDeveloping = !isProduction;
/**
 * 编译后自动打开浏览器
 */
devMiddleware.waitUntilValid(() => {
  // when env is testing, don't need open it
 	opn('http://localhost:5000', {app: ['google chrome']});
  	_resolve()
});
/**
 * post请求示例
 */
app.post('/login', jsonParser, function (req, res) {
    let username = req.body.username;
    let pwd = req.body.password;
    let url = req.body.url;
    console.log(req.body);
	if( isProduction ){
		var options = {
				hostname: 'https-url',
				path: 'restful-name'+'params',
				method: 'POST'
				// key: fs.readFileSync('./keys/client.key'),
				// cert: fs.readFileSync('./keys/client.crt'),
				// ca: [fs.readFileSync('./keys/ca.crt')]
		 };
		options.agent = new https.Agent(options);
		var reqwe = https.request(options, function(response) {
			response.setEncoding('utf-8');
		    response.on('data', function (data) {
				let user = JSON.parse(data).content;
				var token = createToken(JSON.parse(data));
				buildCookie(res,token,user);
				res.json(JSON.parse(data));
		    });
			return;
		 });
		 reqwe.end();
			reqwe.on('error', function(e) {
				console.log(e);
			});
	}else{
		request.post('https-url'+'restful-name'+'params',
			function (error, response, body) {
        return res.json({code: '-1', message: 'error'});
				if (!error && response.statusCode == 200) {
					// todo try catch
					let userResult = JSON.parse(body);

					if (userResult.code != 0) {
						res.json({code: '-1', message: userResult.message});
						return;
					}

					let user = userResult.content;
					var token = createToken(userResult.content);

					res.json({code: userResult.code, message: userResult.message,content:userResult.content});

					return;
				} else {
					event.emit('requestError', res, '登录【' + username + ',' + pwd + '】', body, response, error);
					return;
				}
			});

	}
});

let event = new EventEmitter();

app.listen(5000, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:5000');
});

const webpack = require('webpack');
const config = require('./webpack.config-dev.js');
const opn = require('opn');
const express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    // configObject = require("./config"),
    jwt = require('jsonwebtoken'),
    app = express(),
    request = require('request'),
    path = require('path'),
    log4js = require("log4js"),
    ejs = require('ejs'),
    EventEmitter = require('events').EventEmitter;
var jsonParser = bodyParser.json();
var http = require('http');
var URL = require('url');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');


var _resolve;
var readyPromise = new Promise(resolve => {
  _resolve = resolve
});

// log4js.configure({
//     appenders: [
//         {type: 'console'},
//         {
//             type: 'dateFile',
//             filename: 'logs/normal.log',
//             layout: {type: 'basic'},
//             pattern: '.yyyy-MM-dd',
//             alwaysIncludePattern: true,
//             category: 'normal'
//         }
//     ],
//     levels: {
//         normal: 'INFO'
//     }
// });

log4js.configure({
    appenders: {
        out: { type: 'console' },
        result: { type: 'dateFile', filename: 'logs/normal.log',layout: {type: 'basic'},"pattern":".yyyy-MM-dd.log", alwaysIncludePattern:true},
        default: { type: 'dateFile', filename: 'logs/default.log', layout: {type: 'basic'},"pattern":"yyyy-MM-dd.log",alwaysIncludePattern:true},
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

const normalLog = log4js.getLogger("normal");

// app.use(log4js.connectLogger(normalLog, {level: 'trace', format: ':method :url'}));

let env = process.env.NODE_ENV;

const isProduction = env === 'production';

const isDeveloping = !isProduction;

app.use(cookieParser());


//通过localhost可以访问项目文件夹下的所有文件，等于动态为每个静态文件创建了路由
const compiler = webpack(config);
// app.use(express.static(path.join(__dirname, '/dist')))
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
});

app.use(require('connect-history-api-fallback')());

app.use(devMiddleware);
app.use(require('webpack-hot-middleware')(compiler));

devMiddleware.waitUntilValid(() => {
  // when env is testing, don't need open it
 	opn('http://localhost:5000', {app: ['google chrome']});
  	_resolve()
});


// app.get(['/*'], function (req, res) {
// 	// console.log('req',req.originalUrl);
// 	// res.redirect(req.originalUrl);
// 	// return;
//   res.sendFile(path.join(__dirname, '/dist/index.html'));
// });

// 登录逻辑
app.post('/login', jsonParser, function (req, res) {
    let username = req.body.username;
    let pwd = req.body.password;
    let url = req.body.url;
	if( isProduction || isStaging ){
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
				if (!error && response.statusCode == 200) {
					// todo try catch
					let userResult = JSON.parse(body);

					if (userResult.code != 0) {
						res.json({code: "-1", message: userResult.message});
						return;
					}

					let user = userResult.content;
					var token = createToken(userResult.content);

					res.json({code: userResult.code, message: userResult.message,content:userResult.content});

					return;
				} else {
					event.emit('requestError', res, "登录【" + username + "," + pwd + "】", body, response, error);
					return;
				}
			});

	}
});


let event = new EventEmitter();

// function createToken(content){
//     return jwt.sign({
//     },
//     'shhhhh',
//     {
//         expiresIn: '1days',
//         issuer: 'server',
//         audience: 'client',
//         subject: 'case'
//     }
// );
// }
//  与服务端交互发生错误
// event.on('agError', function (res, errHtmlMessage, errLogMessage, body, response, err) {
//     res.json({code: "-1", message: "服务器发生异常，请稍后再试"});
//     return;
// });
//
// app.post('/logout', function (req, res) {
//     res.json({code: "0", message: "注销成功"});
// });

//监听全局异常,防止程序崩溃
// app.use(function (err, req, res, next) {
//     normalLog.error("发生全局异常:" + err);
//     res.json({code: "-1", message: "服务器发生异常,请稍后再试"});
//     return;
// });

app.listen(5000, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:5000');
});

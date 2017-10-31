const webpack = require('webpack');
const config = require('./webpack.config-dev.js');
const opn = require('opn');
const express = require('express'),
	app = express(),
	log4js = require("log4js"),
	ejs = require('ejs'),
    EventEmitter = require('events').EventEmitter;
var URL = require('url');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

var _resolve;
var readyPromise = new Promise(resolve => {
  _resolve = resolve
});

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

const compiler = webpack(config);

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

let event = new EventEmitter();

app.listen(5000, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:5000');
});

const webpack = require('webpack');
const config = require('./webpack.config-dev.js');
const opn = require('opn');
const express = require('express'),
	app = express();


var _resolve;
var readyPromise = new Promise(resolve => {
  _resolve = resolve
});

const compiler = webpack(config);

let env = process.env.NODE_ENV;

console.log(env);

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

app.listen(5000, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:5000');
});

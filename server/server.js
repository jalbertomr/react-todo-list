const express = require('express');
const path = require('path');
const config = require('../webpack.config');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { noinfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./dist'));

/*  con function en lugar de arrow
app.use('/', function(req, res) {
	res.sendFile(path.resolve('client/index.html'));
});
*/

app.use('/', (req, res) => {
	res.sendFile(path.resolve('client/index.html'));
});

const port = 3000;

app.listen(port, (error) => {
	if (error) throw error;
	console.log('Express server listening on port', port);
});

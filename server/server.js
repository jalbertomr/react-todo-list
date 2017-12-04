const express = require('express');
const path = require('path');

const app = express();

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

const express = require('express');

const app = express();
const port = 9996;

const router = require('./app/routes');
app.use('/', router);

app.listen(port, function() {
	console.log('app');
});


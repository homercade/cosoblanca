require('dotenv').config();

var express = require('express');

var app = express();

require('./app')(app);

app.listen(app.get('port'), () => {
    console.log(`The server is now listening in port ${app.get('port')}`);
});
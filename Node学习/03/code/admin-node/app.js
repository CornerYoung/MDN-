var express = require('express');
var fs = require('fs');

var app = express();

app.engine('html', require('express-art-template'));
app.use('/node_modules', express.static('./node_modules'));
app.use('/public', express.static('./public'));

app.listen(3000, function () {
    console.log('Running... 3000')
});
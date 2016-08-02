var express = require('express'),
    path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(3000, function() {
    console.log('Listening on port 3000...');
});
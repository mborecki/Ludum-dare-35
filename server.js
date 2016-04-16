var express = require('express');
var router = express.Router();

var app = express();

var PORT = 8080;

app.use(express.static('app'));

app.listen(PORT, function(){
    console.log('Server started on: ' + PORT);
});

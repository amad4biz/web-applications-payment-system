/**
* Single web page application based on express.js
*/

console.log('running ...');

var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express(),
    port = process.env.PORT || 3000,
    publicDirectory = path.join(__dirname, '/public');

// logging middleware
app.use(morgan('dev'));

app.use(express.static(publicDirectory));

//app.use(bodyParser.json());

// own json api
app.get('/json-api', function(req, res){
    res.send({success: true, api: "json-api"});
})

var server = app.listen(port, '127.0.0.1', function(){
    console.log('server started on port %s', port);
});

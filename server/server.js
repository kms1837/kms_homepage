require('babel-register');

var http    = require('http');
var path    = require('path');
var express = require("express");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');

var app     = express();
var server  = http.createServer(app);

var router = require('./router/router.js');
var chat_socket = require('./module/chat_socket.js');

var dbUrl = 'mongodb://localhost/test';

init();

require('node-jsx').install();

mongoose.connect(dbUrl, function(err) {
  if(!err) {
    console.log('~ connect DB ~');
    server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", serverStartCall);
  } else {
    console.log(err);
  }
});

function init() {
  serverConfigure();
  router(app);  
}

function serverConfigure() {
  app.set('view engine', 'html');
  app.engine('html', require('ejs').renderFile);
  app.use('/static', express.static(__dirname + '/static'));
  app.use(express.static(path.resolve(__dirname, 'template')));
  app.use(bodyParser.json());         
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(session({
    secret: '@#@$MYSIGN#@$#$',
    resave: false,
    saveUninitialized: true
  }));
}

function serverStartCall() {
  var addr = server.address();
  
  console.log("~ runserver", addr.address + ":" + addr.port + ' ~');
  
  chat_socket.run(server);
  //console.log(process.env.IP);
}
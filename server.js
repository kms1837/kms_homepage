
var http    = require('http');
var path    = require('path');
var express = require("express");

var app     = express();
var server  = http.createServer(app);

var router = require('./router/router.js');
var chat_socket = require('./module/chat_socket');

app.configure(function () {
  app.set('view engine', 'html');
  app.engine('html', require('ejs').renderFile);
  app.use('/static', express.static(__dirname + '/static'));
  app.use(express.static(path.resolve(__dirname, 'template')));
});

chat_socket.run(server);
router.run(app);

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("~ runserver", addr.address + ":" + addr.port + ' ~');
  console.log(process.env.IP);
});

var http    = require('http');
var path    = require('path');
var express = require("express");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app     = express();
var server  = http.createServer(app);

var router = require('./router/router.js');
var chat_socket = require('./module/chat_socket');

var dbUrl = 'mongodb://localhost/test';

app.configure(serverConfigure);
chat_socket.run(server);
router.run(app, mongoose);

mongoose.connect(dbUrl, function(err) {
  if(!err) {
    console.log('~ connect DB ~');
    server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", serverStartCall);
  } else {
    console.log(err);
  }
});


function serverConfigure() {
  app.set('view engine', 'html');
  app.engine('html', require('ejs').renderFile);
  app.use('/static', express.static(__dirname + '/static'));
  app.use(express.static(path.resolve(__dirname, 'template')));
  app.use(bodyParser.json());         
  app.use(bodyParser.urlencoded({ extended: true }));
}

function serverStartCall() {
  var addr = server.address();
  console.log("~ runserver", addr.address + ":" + addr.port + ' ~');
  //console.log(process.env.IP);
}

/*   var db = request.db;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
var mongoose = request.mongoose;
console.log('open!');

var kittySchema = mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
  var greeting = this.name? "Meow name is " + this.name : "I don't have a name";
  console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);
var silence = new Kitten({ name: 'Silence' })
var fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak();
});
*/
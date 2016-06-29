var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var userSchema = mongoose.Schema({
    id          : String,
    name        : String,
    password    : String,
    another     : String,
    created_at  : String
})

var UserModel = mongoose.model('UserModel', userSchema);

router.get('/', function(request, response) {
    UserModel.find(function(err, users) {
       response.send(users); 
    });
});

router.post('/insert', function(request, response) {
    var userData = request.body;
    console.log('user insert : ', userData);
    
   UserModel.count({}, function(err, count) {
    var insertData = {
        id : count,
        name : userData.username,
        password : userData.password,
        another : userData.another,
        created_at : new Date()
    }
    
    var newUser = new UserModel(insertData);
    newUser.save();
   });
});

module.exports = router;

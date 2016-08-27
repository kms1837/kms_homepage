var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var UserModel = require('../models/user_model.js');

router.get('/', function(request, response) {
    var userInfo = request.session['userinfo'];
    if(userInfo) {
        response.status(200).send(userInfo);
    } else {
        response.status(200).send({permission : 1});
    }
});

router.post('/', (request, response) => {
    var userData = request.body;
    console.log('user insert : ', userData);
    
   UserModel.count({}, (err, count) => {
        var insertData = {
            id : count,
            name : userData.username,
            password : userData.password,
            created_at : new Date()
        }
        
        var newUser = new UserModel(insertData);
        newUser.save();
        
        var session = request.session;
        session.name = userData.username;
        response.redirect('/');
   });
});

module.exports = router;

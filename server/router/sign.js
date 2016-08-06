var express = require('express');
var mongoose = require('mongoose');
var sessionManager = require('../module/session_manager');
var router = express.Router();

var UserModel = require('../models/user_model.js');

router.get('/sign_in', function(request, response) {
    var session = request.session;
    if(session.name) response.redirect('/');
    
    response.render('../template/sign_in.html');
});

router.post('/sign_in', function(request, response) {
    var session = request.session;
    var userName = request.params.username;
    var password = request.params.password;
    
    UserModel.findOne({'username':userName, 'password': password },function(err, user){
        if(err){
            console.err(err);
            throw err;
        }
        session.name = user.name;
        response.redirect('/');
    });
});

router.get('/sign_out', function(request, response) {
    response.render('../template/sign_in.html');
});

module.exports = router;
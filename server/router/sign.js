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
        } else {
            if(user) {
                session.name = user.name;
                session.permission = user.permission;
                response.redirect('/');
            }
        }
    });
    
    response.status(200).send('ok');
});//sign_in

router.post('/sign_out', function(request, response) {
    var session = request.session;
    session = {};
    
    response.status(200).send('ok');
});

router.get('/sign_up', function(request, response) {
    response.render('../template/sign_up.html');
});

module.exports = router;
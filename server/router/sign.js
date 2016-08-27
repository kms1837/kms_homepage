var express = require('express');
var mongoose = require('mongoose');
var sessionManager = require('../module/session_manager');
var router = express.Router();

var UserModel = require('../models/user_model.js');

router.post('/sign_in', (request, response) => {
    var session = request.session;
    
    UserModel.findOne(request.body, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            if (user) {
                session['userinfo'] = user;
                response.status(200).send('ok');
            } else {
                response.status(400).send({message : 'unknown admin'});
            }
        }
    });
});//sign_in

router.post('/sign_out', (request, response) => {
    var session = request.session;
    delete session['userinfo'];
    
    response.status(200).send('ok');
});

router.get('/sign_up', (request, response) => {
    response.render('../template/sign_up.html');
});

module.exports = router;
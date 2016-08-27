var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var Question = require('../models/question_model.js');

var sessionManager = require('../module/session_manager.js');

router.get('/', function(request, response) {
    Question.find().sort({id:-1}).exec((err, questions) => {
        if (err) {
            console.err(err);
            throw err;
        }
        response.status(200).send(questions);
    });
});

router.post('/', (request, response, err) => {
    var userData = request.body;
    
    Question.count({}, function(err, count) {
        var insertData = {
            id          : count,
            username    : userData.username,
            text        : userData.text,
            created_at  : new Date()
        }
        
        var new_question = new Question(insertData);
        new_question.save();
        
        response.send('ok!');
    });
});

router.get('/users/:username', (req,res,err) => {
    var memos = new Question();
    Question.findOne({'username':req.params.username}, (err, memo) => {
        if (err) {
            console.err(err);
            throw err;
        }
        res.send(200,memo);
    });
});

router.get('/datas', (req, res, err) => {
    Question.find().sort({id:-1}).exec( (err,memos) => {
        if (err) {
            console.err(err);
            throw err;
        }
        res.send(memos);
    });
});

router.delete('/:question_id', (request, response) => {
    var questionID = request.params.question_id;
    var session = request.session.userinfo;
    
    var deleteFlag = sessionManager.permissionCheck(session, 1);
    
    if (deleteFlag) {
        Question.findOne({'id': questionID}).remove( (err) => {
            if(!err) response.send('delete ok');
            else     console.log(err);
        });
    } else {
        response.status(400).send( JSON.stringify({message : 'permission error'}) );
    }
});

router.delete('/:question_id/reply/', (request, response) => {
    var questionID = request.params.question_id;
    var deleteIndex = request.body.index;
    
    Question.findOne({'id': questionID}, (err, question) => {
        question.replys.splice(deleteIndex, 1);
        question.save();
        response.send(question.replys);
    });
});

router.post('/:question_id/reply/', (request, response, err) => {
    var adminData = request.body;
    var questionID = request.params.question_id;
    
    console.log('id : ', questionID);
    console.log('adminData', adminData);
    
    var replysData = {
        text : adminData.text
    }
    
    Question.findOneAndUpdate({'id': questionID},
    {$push : { replys : replysData} },
    (err, question) => {
    });
});

module.exports = router;

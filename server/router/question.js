/*exports.start = function (request, response) {
    response.render('../template/question_board.html');
};*/

var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var Question = require('../models/question_model.js');

router.get('/', function(request, response) {
    console.log('call!');
    Question.find().sort({id:-1}).exec(function(err, memos){
        if (err) {
            console.err(err);
            throw err;
        }
        console.log(memos);
        response.send(memos);
    });
});

router.post('/', function(request, response, err) {
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

router.get('/users/:username', function(req,res,err){
    var memos = new Question();
    Question.findOne({'username':req.params.username},function(err, memo){
        if (err) {
            console.err(err);
            throw err;
        }
        res.send(200,memo);
    });
});

router.get('/datas', function(req, res, err){
    Question.find().sort({id:-1}).exec(function(err,memos){
        if (err) {
            console.err(err);
            throw err;
        }
        res.send(memos);
    });
});

router.delete('/:question_id', function(request, response) {
    var questionID = request.params.question_id;
    Question.findOne({'id': questionID}).remove(function(err){
        if(!err) response.send('delete ok');
        else     console.log(err);
    });
});

router.delete('/:question_id/reply/', function(request, response) {
    var questionID = request.params.question_id;
    var deleteIndex = request.body.index;
    
    Question.findOne({'id': questionID}, function(err, question) {
        question.replys.splice(deleteIndex, 1);
        question.save();
        response.send(question.replys);
    });
});

router.post('/:question_id/reply/', function(request, response, err){
    var adminData = request.body;
    var questionID = request.params.question_id;
    
    console.log('id : ', questionID);
    console.log('adminData', adminData);
    
    var replysData = {
        text : adminData.text
    }
    
    Question.findOneAndUpdate({'id': questionID},
    {$push : { replys : replysData} },
    function(err, question) {
    });
});

module.exports = router;

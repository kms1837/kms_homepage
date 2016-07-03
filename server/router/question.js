/*exports.start = function (request, response) {
    response.render('../template/question_board.html');
};*/

var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var Question = require('../models/question_model.js');

router.get('/', function(request, response) {
    response.render('../template/question_board.html');
});

router.get('/users/:username', function(req,res,err){
    var memos = new Question();
    Question.findOne({'username':req.params.username},function(err, memo){
        if(err){
            console.err(err);
            throw err;
        }
        res.send(200,memo);
    });
});

router.get('/datas', function(req, res, err){
    Question.find().sort({id:-1}).exec(function(err,memos){
        if(err){
            console.err(err);
            throw err;
        }
        res.send(memos);
    });
});

router.post('/insert', function(request, response, err) {
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

router.post('/:question_id/reply/insert', function(request, response, err){
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

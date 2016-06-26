var ruliweb_log = require('../router/log_get');
var main        = require('../router/main');
var question    = require('../router/question');
/*
var fs          = require('fs');
var browserify  = require('browserify');
var reactify    = require('reactify');
var Handlebars  = require('handlebars');
var React       = require('react');*/

exports.run = function(app, mongoose){
    app.get('/ruliweblog', ruliweb_log.log_get);
    app.get('/', main.start);
    app.get('/main', main.start);
    //app.get('/question', question.start);
    question.start(app, mongoose);
};
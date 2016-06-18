var ruliweb_log = require('../router/log_get');
var main        = require('../router/main');
var question    = require('../router/question');

exports.run = function(app){
    app.get('/ruliweblog', ruliweb_log.log_get);
    app.get('/main', main.start);
    app.get('/question', question.start);
};
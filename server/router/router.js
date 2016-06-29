var ruliweb_log = require('../router/log_get');
var main        = require('../router/main');
var question    = require('../router/question');
var user        = require('../router/user');

exports.run = function(app, mongoose){
    app.get('/ruliweblog', ruliweb_log.log_get);
    app.get('/', main.start);
    app.get('/main', main.start);
    app.use('/question', question);
    app.use('/user', user);
    //question.start(app, mongoose);
};
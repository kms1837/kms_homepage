var ruliweb_log = require('../router/log_get');
var main        = require('../router/main');
var question    = require('../router/question');
var user        = require('../router/user');
var git_rss     = require('../router/git_rss_get');

module.exports = function(app){
    app.get('/git_rss', git_rss);
    app.get('/ruliweblog', ruliweb_log);
    app.get('/', main);
    app.get('/main', main);
    app.use('/question', question);
    app.use('/user', user);
    //question.start(app, mongoose);
};
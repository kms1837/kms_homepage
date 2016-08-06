var sessionManager = require('../module/session_manager');

module.exports = function(request, response) {
    sessionManager(request, response);
    //console.log('세션 : ', request.session);
    response.render('../template/main.html');
}
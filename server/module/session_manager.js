module.exports.loginCheck = function (response, session) {
    var userinfo = session['userinfo'];
    
    if( userinfo != undefined) {
        response.redirect('/');
    }
}

module.exports.permissionCheck = function(session, permission) {
    var userinfo = session['userinfo'];
    
    if (userinfo && userinfo.permission === permission) {
        return true;
    }
    
    return false;
}
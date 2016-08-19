module.exports = function(request, response) {
    var session = request.session;
    console.log(session.name);
    
    if(session.name) {
        
    } else {
        
    }
    
}
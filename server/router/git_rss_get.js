var html_request = require('request');

module.exports = function(request, response) {
    var url = 'http://github.com/kms1837.atom';
    
    html_request(url, function(error, html_response, html){
        if (error) {throw error};
        response.send(html);
    });
};


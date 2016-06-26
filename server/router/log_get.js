var fs = require('fs');

exports.log_get = function(request, response) {
    fs.readFile('static/log/ruliweb_login_log.log', 'utf8', function(err, data) {
        var log_data = data.toString().split('\n');
        var send_data = log_data[log_data.length - 1];
        send_data = send_data.split('-')[1];
        response.send(send_data);
    });
};


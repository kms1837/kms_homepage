var websocket = require("websocket");
var redis  = require("redis");
var client = redis.createClient(6379, '127.0.0.1');

const chatInfo = {
    'type' : 'open',
    'message' : 'Kms Chat ver 0.3입니다. 즐거운 시간 되십시오.'
};

const openMessage = {
    'type' : 'open',
    'name' : '',
    'message' : "유저가 입장하였습니다."
}

const closeMessage = {
    'type' : 'open',
    'message' : '접속을 종료하였습니다.'
}

/*
    messageform = {
        type : '' // open, close, 공지, 일반
        name : '', // 이름
        message : '', // 메세지
    }
*/

exports.run = function (server) {
    var connections = {};
    var messages = [];

    var socket_server = new websocket.server({
        httpServer: server
    });
    
    socket_server.on('request', (request) => {
        
        var connection = init(request);
        
        //redis_scan('msg');
        
        connection.on('message', (message) => {
            var json_data = JSON.parse(message.utf8Data);
            messages.push(json_data);
            
            var send_message = {
                "type" : 'msg',
                "data" : json_data
            };
            
            broadcast(JSON.stringify(send_message));
            redis_set(send_message);
        });
        
        connection.on('close', (reasonCode, description) => {
            delete connections[connection.remoteAddress];
            
            broadcast(JSON.stringify(closeMessage));
            messages.push(closeMessage);
        });
    });
    
    function init (request) {
        var connection = request.accept(null, request.origin);
        connections[request.remoteAddress] =  connection;
        
        var init_data = [];
        if(messages.length > 0) init_data = JSON.parse(JSON.stringify(messages));
        
        init_data.push(openMessage);
        init_data.push(chatInfo);
        
        messages.push(openMessage);
        
        var init_message = {
            "type" : 'init',
            "data" : init_data
        }
        
        connection.send(JSON.stringify(init_message));
        
        return connection;
    }
    
    function broadcast(data) {
        var connectionKeys = Object.keys(connections);
        
        if (connectionKeys.length > 0) {
            connectionKeys.forEach( (key) => {
                var socket = connections[key];
                socket.send(data);
            });
        }
    }
    
    function redis_set(json_data) {
      var key  = json_data.type;
      var data = JSON.stringify(json_data);
      
      client.set(key, data, (err, data) => {
         if(err) {
               console.log(err);
               return;
         }
         client.expire(key,10);
         console.log(data);
      });
    }
    
    function redis_get(key) {
      client.get(key, (err, data) => {
         if (err) {
           console.log(err);
           return;
         }
         
         var value = JSON.parse(data);
         console.log(value);
      }); 
    }
    
    function redis_scan(key) {
      client.keys(key, (err, data) => {
         if (err) {
           console.log(err);
           return;
         }
         
         var value = JSON.parse(data);
         console.log(value);
      }); 
    }
};
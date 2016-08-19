var web_socket;

$(document).ready(function() {
    connect();
    $('#send_message').click(function(){
        if(web_socket != undefined) {
            var messge_input = $('#in_message');
            var message_name = $('#msg_name').val();
            
            if(message_name === '') message_name = '이름없음'
            
            var message = {
                'type' : 'msg',
                'name' : message_name,
                'message' : messge_input.val()
            }
            web_socket.send(JSON.stringify(message));
            messge_input.val('');
        }
    });
});

function connect()
{
    var url = "ws://" + 'kms-net-test-kms1837.c9users.io';
    console.log(url);
    
    web_socket = new WebSocket(url);
    
    try {
        web_socket.onopen = function() {
            var init_message = {
                'type' : 'open',
                'name' : '',
                'message' : "유저가 입장하였습니다."
            }
            web_socket.send(JSON.stringify(init_message));
        }
     
        web_socket.onmessage = function(e) {
            var json_data = JSON.parse(e.data);
            message_filter(json_data);
            
            var chat_view = $('#chat_view')
            var scrollHeight = chat_view.prop('scrollHeight');
            var divHeight = chat_view.height();
            
            chat_view.scrollTop(scrollHeight - divHeight);
        }
     
        web_socket.onclose = function(e) {
            web_socket.send("유저가 종료하였습니다.");
        }
    }catch(e) {
        console.log(e);
    }
    
    console.log(url);
}

function message_filter(json_data) {
    var chat_view = $('#chat_view ul');
    switch (json_data.type) {
        case 'init':
            $(json_data.data).each(function(index, data) {
               chat_view.append('<li>' + chat_filter(data) + '</li>');
            });
            chat_view.scrollTop(99999);
            break;
        case 'msg':
            chat_view.append('<li>' + chat_filter(JSON.parse(json_data.data)) + '</li>');
            break;
        default:
            break;
    }
}

function chat_filter(json_data) {
    try {
        var return_data = '';
        
        switch (json_data.type) {
            case 'open':
                return_data = json_data.message;
                break;
            default:
                return_data = json_data.name + ': ' + json_data.message;
                break;
        }
    }catch(e){
        console.log(data);
        //console.log(e);
    }
    
    return return_data;
}
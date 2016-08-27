class Chat {
    
    constructor (view) {
        this.connect(view);
        this.web_socket;
    }
    
    connect (view) {
        var url = "ws://" + 'kms-net-test-kms1837.c9users.io';
        
        this.web_socket = new WebSocket(url);
        
        try {
            this.web_socket.onopen = function() {
                var init_message = {
                    'type' : 'open',
                    'name' : '',
                    'message' : "유저가 입장하였습니다."
                }
                
                this.web_socket.send(JSON.stringify(init_message));
            }
         
            this.web_socket.onmessage = function(e) {
                var json_data = JSON.parse(e.data);
                this.message_filter(json_data);
                
                var chat_view = view;
                var scrollHeight = chat_view.prop('scrollHeight');
                var divHeight = chat_view.height();
                
                chat_view.scrollTop(scrollHeight - divHeight);
            }
         
            this.web_socket.onclose = function(e) {
                this.web_socket.send("유저가 종료하였습니다.");
            }
        }catch(e) {
            console.log(e);
        }
    }
    
    message_filter (json_data) {
        var chat_view = $('#chat_view ul');
        
        switch (json_data.type) {
            case 'init':
                $(json_data.data).each( (index, data) => {
                   chat_view.append('<li>' + this.chat_filter(data) + '</li>');
                });
                chat_view.scrollTop(99999);
                break;
                
            case 'msg':
                chat_view.append('<li>' + this.chat_filter(JSON.parse(json_data.data)) + '</li>');
                break;
                
            default:
                break;
        }
    }
    
    chat_filter(json_data) {
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
            //console.log(e);
        }
        
        return return_data;
    }
};

export default Chat;

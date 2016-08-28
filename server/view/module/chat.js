
class Chat {
    constructor (context) {
        this.context = context;
        this.connect();
    }
    
    connect () {
        var url = "ws://" + 'kms-net-test-kms1837.c9users.io';
        
        this.web_socket = new WebSocket(url);
        
        var self = this;
        
        try {
            this.web_socket.onopen = function() {
            }
         
            this.web_socket.onmessage = function(e) {
                var json_data = JSON.parse(e.data);
                self.message_filter(json_data);
            }
         
            this.web_socket.onclose = function(e) {
            }
        }catch(e) {
            console.log(e);
        }
    }
    
    sendMessage (message) {
        this.web_socket.send(JSON.stringify(message));
    }
    
    message_filter (json_data) {
        switch (json_data.type) {
            case 'init':
                this.context.setState({messages : json_data.data});
                break;
                
            case 'msg':
                var prevMessage = this.context.state.messages;
                prevMessage.push(json_data.data);
                this.context.setState({messages : prevMessage});
                /*this.context.setState({messages : prevMessage}, () => {
                    var node = this.context.refs.chat_view;
                    node.scrollTop = node.scrollHeight;
                });*/
                break;
                
            default:
                break;
        }
    }
}

export default Chat;
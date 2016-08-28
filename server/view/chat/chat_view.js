import React from 'react';
import ReactDOM from 'react-dom'

class ChatView extends React.Component
{
    constructor () {
        super();
        
        if (typeof window != 'undefined') this.connect();
        
        this.state = {
            messages : [],
            talk : {
                type : '',
                name : '',
                message : ''
            }
        }
        
        this.parseMessage = this.parseMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.changeValue = this.changeValue.bind(this);
        //this.chat = new Chat($('#chat_view'));
    }

    connect () {
        var url = "ws://" + 'kms-net-test-kms1837.c9users.io';
        
        this.web_socket = new WebSocket(url);
        
        var self = this;
        
        try {
            this.web_socket.onopen = function() {
                var init_message = {
                    'type' : 'open',
                    'name' : '',
                    'message' : "유저가 입장하였습니다."
                }
                
                self.web_socket.send(JSON.stringify(init_message));
            }
         
            this.web_socket.onmessage = function(e) {
                var json_data = JSON.parse(e.data);
                self.message_filter(json_data);
            }
         
            this.web_socket.onclose = function(e) {
                self.web_socket.send("유저가 종료하였습니다.");
            }
        }catch(e) {
            console.log(e);
        }
    }
    
    message_filter (json_data) {
        //var chat_view = $('#chat_view ul');
        
        switch (json_data.type) {
            case 'init':
                this.setState({messages : json_data.data});
                //chat_view.scrollTop(99999);
                break;
                
            case 'msg':
                var prevMessage = this.state.messages;
                prevMessage.push(json_data.data);
                this.setState({messages : prevMessage}, () => {
                    var node = this.refs.chat_view;
                    node.scrollTop = node.scrollHeight; //20은 추가된 텍스트를 고려함
                });
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
        } catch (e) {
            //console.log(e);
        }
        
        return return_data;
    }
    
    parseMessage () {
        var messages = this.state.messages;
        if ( messages.length > 0) {
            var messageNodes = messages.map((object) => {
                var message = this.chat_filter(object);
                return (<li>{message}</li>);
            });
            
            return (
                <ul>
                    {messageNodes}
                </ul>
            )
        }
    }
    
    sendMessage () {
        var message = this.state.talk;
        
        if(message['name'] === '') message['name'] = '이름없음'
        
        message['type'] = 'msg';
        
        this.web_socket.send(JSON.stringify(message));
        
        var defaultForm = {
            type : '',
            name : message['name'],
            message : ''
        }
        
        this.setState({talk : defaultForm});
    }
    
    changeValue (event) {
        var talkData = this.state.talk;
        var name = event.target.name;
        var value = event.target.value;
        talkData[name] = value;
        
        this.setState({talk : talkData});
    }
    
    render () {
        var chatMessages = this.parseMessage();
        var talkData = this.state.talk;
        
        return (
            <div id="chat">
                <div ref="chat_view" id="chat_view">
                    {chatMessages}
                </div>
                <div className="edit_bar">
                    <div className="edit_tool">
                        <input onChange={this.changeValue} value={talkData.name} type="text" name="name" id="msg_name"/>
                        <input onChange={this.changeValue} value={talkData.message} type="text" name="message" id="in_message"/>
                        <button onClick={this.sendMessage} className="pull-right" id="send_message">send</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatView;
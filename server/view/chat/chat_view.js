import React from 'react';
import ReactDOM from 'react-dom'

class ChatView extends React.Component
{
    constructor () {
        super();
        
        this.state = {
            talk : {
                type : '',
                name : '',
                message : ''
            }
        }
        
        this.parseMessage = this.parseMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }
    
    sendMessage () {
        var message = this.state.talk;
        
        if(message['name'] === '') message['name'] = '이름없음'
        
        message['type'] = 'msg';
        
        this.props.chat.object.sendMessage(message)
        
        var defaultForm = {
            type : '',
            name : message['name'],
            message : ''
        }
        
        this.setState({talk : defaultForm});
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
            console.log(e);
        }
        
        return return_data;
    }
    
    changeValue (event) {
        var talkData = this.state.talk;
        var name = event.target.name;
        var value = event.target.value;
        talkData[name] = value;
        
        this.setState({talk : talkData});
    }
    
    parseMessage () {
        var messages = this.props.chat.messages;
        if ( messages.length > 0) {
            var messageNodes = messages.map((object) => {
                var message = this.chat_filter(object);
                return (<li>{message}</li>);
            });
            
            /*var node = this.refs.chat_view;
            node.scrollTop = node.scrollHeight;*/
            return (
                <ul>
                    {messageNodes}
                </ul>
            )
        }
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
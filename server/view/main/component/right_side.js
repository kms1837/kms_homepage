import React from 'react';

class RightSide extends React.Component
{
    render () {
        return (
            <aside className="rightSide">
                <div id="status">
                    <div id="ruliweb_status">
                        <span>접속수집현황:</span><span id="ruliweb_time"></span>
                    </div>
                    <div id="army_status">
                        <span className="dd">D-</span>
                        <span id="army_dday"></span>
                        <div id="army_time"></div>
                    </div>
                </div>
                <div id="chat">
                    <div id="chat_view">
                        <ul>
                        </ul>
                    </div>
                   <input type="type/text" id="msg_name"/> <input type="type/text" id="in_message"/><button id="send_message">send</button>
                </div>
            </aside>
        );
    }
}

export default RightSide
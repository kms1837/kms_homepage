import React from 'react';
import ChatView from '../../chat/chat_view.js';
import $ from 'jquery'

class RightSide extends React.Component
{
    constructor () {
        super();
        
        this.state = {
            armyDay: 0,
            armyTime: '',
            ruliwebTime : '',
        }
        
        this.timerEventHander = this.timerEventHander.bind(this);
    }
    
    componentWillMount () {
        var self = this;
        if($.get != undefined) {
            $.get('/ruliweblog', (data) => {
                self.setState({ruliwebTime : data});
            });
           
            var timer = setInterval(this.timerEventHander, 1000);
        }//서버 사이드 측 제이쿼리 로드 문제
    }
    
    timerEventHander () {
        var d_day = new Date('July 25, 2017');
        
        var now = new Date();
        var gap = now.getTime() - d_day.getTime();
        var d = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;
        var h = Math.floor((gap/(1000*60*60)) % 24) * -1;
        var m = Math.floor((gap/(1000*60)) % 60) * -1;
        var s = Math.floor((gap/1000) % 60) * -1;
        
        if(m < 10) m = '0' + m;
        if(s < 10) s = '0' + s;
        
        var time = '(' + h + ':' + m + ':' + s + ')';
        
        this.setState({armyDay : d, armyTime : time });
    }
    
    render () {
        return (
            <aside className="rightSide">
                <div id="status">
                    <div id="ruliweb_status">
                        <span>접속수집현황:</span>
                        <span id="ruliweb_time"> {this.state.ruliwebTime} </span>
                    </div>
                    <div id="army_status">
                        <span className="dd">D-</span>
                        <span id="army_dday">{this.state.armyDay}</span>
                        <div id="army_time">{this.state.armyTime}</div>
                    </div>
                </div>
                <ChatView />
            </aside>
        );
    }
}

export default RightSide
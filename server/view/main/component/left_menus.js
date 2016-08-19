import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

class LeftMenus extends React.Component
{
    render () {
        return (
            <aside className="leftSide">
                <ul>
                    <li><Link to="home" className="select">메인</Link></li>
                    <li><Link to="question_board">질문</Link></li>
                    <li><Link to="resent">Github Commit</Link></li>
                    <li><Link to="chat">채팅</Link></li>
                    <li><Link to="calendar">일정</Link></li>
                </ul>
            </aside>
        );
    }
}

export default LeftMenus
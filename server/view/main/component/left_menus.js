import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

class LeftMenus extends React.Component
{
    render () {
        return (
            <aside className="leftSide">
                <ul>
                    <li id="menu1" class="select"><Link to="home">메인</Link></li>
                    <li id="menu2"><Link to="question_board">질문</Link></li>
                    <li id="menu3"><Link to="resent">Github Commit</Link></li>
                    <li id="menu4">채팅 </li>
                    <li id="menu5">일정 </li>
                </ul>
            </aside>
        );
    }
}

export default LeftMenus
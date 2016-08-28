import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

class LeftMenus extends React.Component
{
    constructor () {
        super();
        
        var menusFrom = [
            {name: '메인', link:'home'},
            {name: '질문', link:'question_board'},
            {name: 'Github Commit', link:'resent'},
            {name: '채팅', link:'chat'},
            {name: '일정', link:'calendar'}
        ];
        
        this.state = {
            menus : menusFrom,
            select : 0
        }
        
        this.changeSelect = this.changeSelect.bind(this);
        this.parseMenu = this.parseMenu.bind(this);
    }
    
    changeSelect (selectIndex) {
        this.setState({select : selectIndex});
    }
    
    parseMenu () {
        var self = this;
        return this.state.menus.map( (object, index) => {
            var select = index === this.state.select ? 'select' : ''
            return (
                <li>
                    <Link to={object.link} onClick={ () => this.changeSelect(index)} className={select}>
                        {object.name}
                    </Link>
                </li>
            );
        })
    }
    
    render () {
        /*
            <li><Link to="home" onClick={this.changeSelect} className="select">메인</Link></li>
            <li><Link to="question_board" onClick={this.changeSelect}>질문</Link></li>
            <li><Link to="resent" onClick={this.changeSelect}>Github Commit</Link></li>
            <li><Link to="chat" onClick={this.changeSelect}>채팅</Link></li>
            <li><Link to="calendar" onClick={this.changeSelect}>일정</Link></li>
        */
        var menus = this.parseMenu();
        return (
            <aside className="leftSide">
                <ul>
                    {menus}
                </ul>
            </aside>
        );
    }
}

export default LeftMenus
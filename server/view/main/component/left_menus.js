import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

class LeftMenus extends React.Component
{
    constructor () {
        super();
        
        let menusFrom = [
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
        let self = this;
        let pathName = this.props.path;
        console.log(this.props);
        
        return this.state.menus.map( (object, index) => {
            let select;
            select = index === self.state.select ? 'select' : '';
            
            if (self.state.select === 0
                && pathName != ''
                && pathName != 'home'
                && pathName != undefined ) {
                select = pathName === object.link ? 'select' : '';
            }
            
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
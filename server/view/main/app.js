import React from 'react';
import RightSide from './component/right_side.js'
import LeftMenus from './component/left_menus.js'

import Chat from '../module/chat.js'
import $ from 'jquery'

class App extends React.Component
{
    constructor () {
        super();
        this.state = {
            messages : [],
            permission : 2
        }
        
        this.Chat = {};
    }
    
    componentWillMount () {
        var self = this;
        if($.get != undefined) {
            $.get('/user', (data) => {
                self.setState({permission : data.permission});
            });
            
            this.Chat = new Chat(self);
        }//서버 사이드 측 제이쿼리 로드 문제
    }
    
    signOut () {
        $.post('/sign_out').done(() => {
            window.location = '/'; 
        })
    }
    
    render () {
        var chatFrom = {
            object : this.Chat,
            messages : this.state.messages
        }
        
        var sendRootFrom = {
            permission: this.state.permission,
            chat: chatFrom
        }
        var childrenWithProps = React.cloneElement(this.props.children, sendRootFrom );
        // <p> 권한 : {this.state.permission} </p>
        
        var adminButton = this.state.permission === 0 ? (<button className="admin-btn" onClick={this.signOut}>Admin Logout</button>) :
                                                        (<a className="admin-btn" href="/sign_in">Admin Login</a>);
                                                        
        var pathName = this.props.location.pathname.split('/')[1];
        
        return (
            <div className="wrap">
                <div className="container">
                    {adminButton}
                    <header>
                        <h1>kms.Net</h1>
                    </header>
                    <LeftMenus path={pathName}/>
                    <section className="content">
                        {childrenWithProps}
                    </section>
                    <RightSide chat={chatFrom} />
                </div>
                <footer>
                    kms1837
                </footer>
            </div>
        );
    }
}

export default App;
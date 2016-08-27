import React from 'react';
import RightSide from './component/right_side.js'
import LeftMenus from './component/left_menus.js'

import $ from 'jquery'

class App extends React.Component
{
    constructor () {
        super();
        this.state = {
            armyDay: 0,
            armyTime: '',
            ruliwebTime : '',
            permission : 2
        }
        
        this.timerEventHander = this.timerEventHander.bind(this);
    }
    
    componentWillMount () {
        var self = this;
        if($.get != undefined) {
            $.get('/user', (data) => {
                self.setState({permission : data.permission});
            });
           
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
    
    signOut () {
        $.post('/sign_out').done(() => {
            window.location = '/'; 
        })
    }
    
    render () {
        var childrenWithProps = React.cloneElement(this.props.children, { permission: this.state.permission} );
        // <p> 권한 : {this.state.permission} </p>
        
        var adminButton = this.state.permission === 0 ? (<button className="admin-btn" onClick={this.signOut}>Admin Logout</button>) :
                                                        (<a className="admin-btn" href="/sign_in">Admin Login</a>);
        return (
            <div className="wrap">
                <div className="container">
                    {adminButton}
                    <header>
                        <h1>kms.Net</h1>
                    </header>
                    <LeftMenus/>
                    <section className="content">
                        {childrenWithProps}
                    </section>
                    <RightSide  armyDay={this.state.armyDay}
                                armyTime={this.state.armyTime}
                                ruliwebTime={this.state.ruliwebTime}/>
                </div>
                <footer>
                    kms1837
                </footer>
            </div>
        );
    }
}

export default App;
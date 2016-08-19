import React from 'react';
import RightSide from './component/right_side.js'
import LeftMenus from './component/left_menus.js'

import $ from 'jquery'

class App extends React.Component
{
    constructor () {
        super();
        this.state = {
            permission : 1
        }
        console.log(this);
    }
    
    componentWillMount() {
        var self = this;
        if($.get != undefined) {
           $.get('/user', (data) => {
              self.setState({permission : data.permission});
           });
        }//서버 사이드 측 제이쿼리 로드 문제
    }
    
    adminLogin () {
        console.log(this);
    }
    
    render () {
        var childrenWithProps = React.cloneElement(this.props.children, { permission: this.state.permission} );
        // <p> 권한 : {this.state.permission} </p>
        return (
            <div className="wrap">
                <div className="container">
                    <a className="admin-btn" href="/sign_in">Admin Login</a>
                    <header>
                        <h1>kms.Net</h1>
                    </header>
                    <LeftMenus/>
                    <section className="content">
                        {childrenWithProps}
                    </section>
                    <RightSide/>
                </div>
                <footer>
                    kms1837
                </footer>
            </div>
        );
    }
}

export default App;
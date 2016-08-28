import React from 'react';

class SignInView extends React.Component
{
    constructor() {
        super();
        this.state = {
            'username' : '',
            'password' : ''   
        };
        
        this.changeValue = this.changeValue.bind(this);
        this.logIN = this.logIN.bind(this);
    }
    
    changeValue (event) {
        var name = event.target.name;
        var value = event.target.value;
        this.state[name] = value;
    }
    
    logIN (event) {
        event.preventDefault();
        console.log(this.state);
        
        $.post('/sign_in', this.state)
        .done(() => {
            window.location = '/';
        }).fail( (request) => {
            alert( "error" );
        });
    }
    
    render() {
        return (
            <div className="wrap">
                <div className="container">
                    <div className="login_box">
                        <div className="from_element">
                            <label>Id</label>
                            <input onChange={this.changeValue} name='username' type="text"/>
                        </div>
                        <div className="from_element">
                            <label>Password</label>
                            <input onChange={this.changeValue} name='password' type="password"/>
                        </div>
                        <div className="from_element">
                            <div className="pull-right">
                                <button onClick={this.logIN}>로그인</button>
                                <button>회원가입</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignInView;
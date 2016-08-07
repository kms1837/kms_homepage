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
        $.post('/sign_in', this.state, (response) => {
            console.log(response);
        });
    }
    
    render() {
        return (
            <div>
                <input onChange={this.changeValue} name='username' type="text"/>
                <input onChange={this.changeValue} type="text"/>
                <button onClick={this.logIN}>submit</button>
                <button>회원가입</button>
            </div>
        );
    }
}

ReactDOM.render(
  <SignInView/>,
  document.querySelector('.content')
);
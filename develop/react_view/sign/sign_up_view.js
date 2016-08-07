class SignUpView extends React.Component
{
    constructor() {
        super();
        this.state = {
            'username' : '',
            'password' : ''   
        };
        
        this.changeValue = this.changeValue.bind(this);
        this.signUp = this.signUp.bind(this);
    }
    
    changeValue (event) {
        var name = event.target.name;
        var value = event.target.value;
        this.state[name] = value;
    }
    
    signUp (event) {
        event.preventDefault();
        $.post('/user', this.state, (response) => {
            console.log(response);
        });
    }
    
    render() {
        return (
            <div>
                <input onChange={this.changeValue} name='username' type="text"/>
                <input onChange={this.changeValue} type="text"/>
                <button onClick={this.signUp}>submit</button>
            </div>
        );
    }
}

ReactDOM.render(
  <SignUpView/>,
  document.querySelector('.content')
);
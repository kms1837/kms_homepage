class SignInView extends React.Component
{
    logIN (event) {
        event.preventDefault();
        console.log('click!');
        $.post('/sign_in');
    }
    
    render() {
        return (
            <div>
                <input type="text"/>
                <input type="text"/>
                <button onClick={this.logIN}>submit</button>
            </div>
        );
    }
}

ReactDOM.render(
  <SignInView/>,
  document.querySelector('.content')
);
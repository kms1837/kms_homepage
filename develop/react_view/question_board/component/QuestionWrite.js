class QuestionWrite extends React.Component
{
  constructor() {
    super();
    this.submitEvent = this.submitEvent.bind(this);
  }
  submitEvent(e) {
    e.preventDefault();
    
    var form_data = {
      username : e.target.username.value,
      text : e.target.text.value
    };
    
    $.post('/question/insert', form_data);
    
    this.props.update();
  }
  
  render(){
    return (
      <form className="question_write" name="question" onSubmit={this.submitEvent}>
        <ul>
          <li className="form_box">
            <label>name</label> <input type="text" name="username"/>
          </li>
          <li className="form_box">
            <textarea name="text"></textarea>
          </li>
          <li className="form_box">
            <div className="btn_group">
              <button type="submit">Submit</button>
            </div>
          </li>
        </ul>
      </form>
    );
  }
}

export default QuestionWrite
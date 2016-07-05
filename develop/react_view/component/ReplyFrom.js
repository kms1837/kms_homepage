class ReplyFrom extends React.Component
{
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (e) {
    e.preventDefault();
    
    var form_data = {
      question_id : 0,
      text : e.target.text.value
    }
    
    var question_box = $(e.target).closest('.question_box');
    var question_id  = question_box.attr('itemID');
    
    $.post('/question/' + question_id + '/reply/insert', form_data);
    
    e.target.text.value = '';
    this.props.update();
  }
  render () {
    return (
      <form className="replyForm" onSubmit={this.handleSubmit}>
        <input type="text" name="text" placeholder="내용을 입력하세요..." ref="text" />
        <input type="submit" value="올리기" />
      </form>
    );    
  }
}

export default ReplyFrom
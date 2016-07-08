class QuestionReply extends React.Component
{
  constructor() {
    super();
    this.reply_delete = this.reply_delete.bind(this);
  }
  
  reply_delete(event) {
    var index = $(event.target).closest('li').attr('itemID');
    var question_id = $(event.target).closest('.question_box').attr('itemID');
    var deleteForm = {
      index : index
    }
    
    $.ajax({
      url       : '/question/' + question_id + '/reply/',
      type      : 'DELETE',
      data      : deleteForm,
      success: function(data) {
        //this.setState({data: data});
        this.props.update();
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }
    });
  }
  
  render () {
    var self = this;
    var questionReplyNodes = this.props.data.map(function(reply, index) {
      return (
        <li className="reply" itemID={index}>
          <span className="reply_deco"> ></span>
          <span className="reply_text">{reply.text}</span>
          <span className="reply_delete"><button onClick={self.reply_delete}>X</button></span>
        </li>
      );
    });
    return (
      <div className="reply_box">
        <ul>
          {questionReplyNodes}
        </ul>
      </div>
    );
  }
}

export default QuestionReply
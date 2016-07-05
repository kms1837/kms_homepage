class QuestionReply extends React.component
{
  render () {
    var questionReplyNodes = this.props.data.map(function(reply) {
      return(
        <li className="reply">
          <span className="reply_deco"> ></span>
          <span className="reply_text">{reply.text}</span>
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
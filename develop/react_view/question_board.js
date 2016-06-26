/*var reply_data = [
  {id: 1, text: "답변1이요!"},
  {id: 2, text: "답변2이요!"}
];

var data = [
  {id: 1, username: "Pete Hunt", text: "질문이요!", replys:reply_data},
  {id: 2, username: "Jordan Walke", text: "This is *another* comment", replys:reply_data},
  {id: 3, username: "Jordan Walke", text: "This is *another* comment", replys:reply_data},
  {id: 4, username: "Jordan Walke", text: "This is *another* comment", replys:reply_data}
];*/

var data;

var QuestionBoard = React.createClass({
  render : function() {
    return (
      <div className="question_board">
        <QuestionList data={this.props.data}/>
      </div>
    );
  }
});

var QuestionList = React.createClass({
  render : function() {
    var questionNodes = this.props.data.map(function(question) {
      return(
        <div className="question_box">
          <div className="question" key={question.id}>
            <h3>{question.username}</h3>
            <span className="question_text">{question.id} : {question.text}</span>
          </div>
          <QuestionReply data={question.replys}/>
        </div>
      );
    });
    return (
      <div className="question_list">
        {questionNodes}
      </div>
    );
  }
});

var QuestionReply = React.createClass({
  render : function() {
    var questionReplyNodes = this.props.data.map(function(reply) {
      return(
        <div className="reply" key={reply.id}>
          <span className="reply_deco"> ></span>
          <span className="reply_text">{reply.id} : {reply.text}</span>
        </div>
      );
    });
    return (
      <div className="reply_box">
        {questionReplyNodes}
      </div>
    );
  }
});

ReactDOM.render(
  <QuestionBoard data={data}/>,
  document.querySelector('.question_view')
);
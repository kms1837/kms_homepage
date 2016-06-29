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
  getInitialState : function() {
    return {data: []}
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }, // 컴포넌트가 렌더링 된다음 자동 호출됩니다.
  render : function() {
    return (
      <div className="question_board">
        <QuestionList data={this.state.data}/>
      </div>
    );
  }
});

var ReplyFrom = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    
    var form_data = {
      question_id : 0,
      text : e.target.text.value
    }
    
    $.post('/question/' + 0 + '/reply/insert', form_data);
    
    this.refs.text.value = '';
  },
  render : function() {
    return (
      <form className="replyForm" onSubmit={this.handleSubmit}>
        <input type="text" name="text" placeholder="내용을 입력하세요..." ref="text" />
        <input type="submit" value="올리기" />
      </form>
    );    
  }
});

var QuestionBox = React.createClass({
  render : function() {
    var data = this.props.data;
    console.log(data.replys);
    return (
        <div className="question_box">
          <div className="question">
            <h3><span className="question_id">{data.id}</span> ] {data.username}</h3>
            <h4>{data.created_at}</h4>
            <span className="question_text">{data.text}</span>
          </div>
          <QuestionReply data={data.replys}/>
          <ReplyFrom />
        </div>
    );
  }
});

var QuestionList = React.createClass({
  render : function() {
    console.log(this.props.data);
    var questions = this.props.data;
    return (
      <div className="question_list">
        {questions.map(function(question) {
          return <QuestionBox data={question}/>;
        })}
      </div>
    );
  }
});

var QuestionReply = React.createClass({
  render : function() {
    var questionReplyNodes = this.props.data.map(function(reply) {
      return(
        <div className="reply">
          <span className="reply_deco"> ></span>
          <span className="reply_text">{reply.text}</span>
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
  <QuestionBoard url="/question/datas"/>,
  document.querySelector('.question_view')
);
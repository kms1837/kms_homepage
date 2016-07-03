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

var QuestionList = React.createClass({
  getInitialState () {
    return {data: []}
  },
  updateData() {
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
  },
  componentDidMount () {
    this.updateData();
  }, // 컴포넌트가 렌더링 된다음 자동 호출됩니다.
  render () {
    var questions = this.state.data;
    var updatefunc = this.updateData;
    return (
      <div className="question_board">
        <div className="question_list">
          {questions.map(function(question) {
            return <QuestionBox update={updatefunc} key={question.id} data={question}/>;
          })}
        </div>
      </div>
    );
  }
});

var QuestionBox = React.createClass({
  render () {
    var data = this.props.data;
    return (
        <div className="question_box" itemID={data.id}>
          <div className="question">
            <h3><span className="question_id">{data.id}</span> ] {data.username} <span className="created_at">{data.created_at}</span></h3>
            <span className="question_text">{data.text}</span>
          </div>
          <QuestionReply key={data.id} data={data.replys}/>
          <ReplyFrom update={this.props.update}/>
        </div>
    );
  }
});

var QuestionReply = React.createClass({
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
});

var ReplyFrom = React.createClass({
  handleSubmit (e) {
    e.preventDefault();
    
    var form_data = {
      question_id : 0,
      text : e.target.text.value
    }
    
    var question_box = $(e.target).closest('.question_box');
    var question_id  = question_box.attr('itemID');
    
    $.post('/question/' + question_id + '/reply/insert', form_data);
    
    this.refs.text.value = '';
    this.props.update();
  },
  render () {
    return (
      <form className="replyForm" onSubmit={this.handleSubmit}>
        <input type="text" name="text" placeholder="내용을 입력하세요..." ref="text" />
        <input type="submit" value="올리기" />
      </form>
    );    
  }
});

var QuestionWrite = React.createClass({
  submitEvent(e) {
    e.preventDefault();
    
    var form_data = {
      username : e.target.username.value,
      text : e.target.text.value
    };
    
    $.post('/question/insert', form_data);
    
    this.props.update();
  },
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
  
});

var QuestionView = React.createClass({
  getInitialState () {
    return {view: <QuestionList url="/question/datas"/>, btn_name : '글쓰기', view_num : 0}
  },
  view_change() {
    var nowView = this.state.view_num;
    switch(nowView) {
      case 0:
        this.setState({view: <QuestionWrite update={this.view_change}/>, btn_name : '글쓰기 취소', view_num : 1});
        break;
      case 1:
        this.setState({view: <QuestionList url="/question/datas"/>, btn_name : '글쓰기', view_num : 0});
        break;
    }
  },
  render() {
    return (
      <div className="question_board">
        <div className='question_view'>
          {this.state.view}
        </div>
        <div className='edit_bar'>
          <div className="edit_tool">
              <button className='edit_question' onClick={this.view_change}>{this.state.btn_name}</button>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <QuestionView/>,
  document.querySelector('.content_view')
);
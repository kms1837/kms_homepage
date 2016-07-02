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

var QuestionBoard = React.createClass({
  displayName: 'QuestionBoard',

  getInitialState() {
    return { data: [] };
  },
  updateData() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ data: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount() {
    this.updateData();
  }, // 컴포넌트가 렌더링 된다음 자동 호출됩니다.
  render() {
    return React.createElement(
      'div',
      { className: 'question_board' },
      React.createElement(QuestionList, { data: this.state.data })
    );
  }
});

var ReplyFrom = React.createClass({
  displayName: 'ReplyFrom',

  handleSubmit(e) {
    e.preventDefault();

    var form_data = {
      question_id: 0,
      text: e.target.text.value
    };

    $.post('/question/' + 0 + '/reply/insert', form_data);

    this.refs.text.value = '';
  },
  render() {
    return React.createElement(
      'form',
      { className: 'replyForm', onSubmit: this.handleSubmit },
      React.createElement('input', { type: 'text', name: 'text', placeholder: '내용을 입력하세요...', ref: 'text' }),
      React.createElement('input', { type: 'submit', value: '올리기' })
    );
  }
});

var QuestionBox = React.createClass({
  displayName: 'QuestionBox',

  render() {
    var data = this.props.data;
    return React.createElement(
      'div',
      { className: 'question_box' },
      React.createElement(
        'div',
        { className: 'question' },
        React.createElement(
          'h3',
          null,
          React.createElement(
            'span',
            { className: 'question_id' },
            data.id
          ),
          ' ] ',
          data.username,
          ' ',
          React.createElement(
            'span',
            { className: 'created_at' },
            data.created_at
          )
        ),
        React.createElement(
          'span',
          { className: 'question_text' },
          data.text
        )
      ),
      React.createElement(QuestionReply, { data: data.replys }),
      React.createElement(ReplyFrom, null)
    );
  }
});

var QuestionList = React.createClass({
  displayName: 'QuestionList',

  render() {
    var questions = this.props.data;
    return React.createElement(
      'div',
      { className: 'question_list' },
      questions.map(function (question) {
        return React.createElement(QuestionBox, { data: question });
      })
    );
  }
});

var QuestionReply = React.createClass({
  displayName: 'QuestionReply',

  render() {
    var questionReplyNodes = this.props.data.map(function (reply) {
      return React.createElement(
        'div',
        { className: 'reply' },
        React.createElement(
          'span',
          { className: 'reply_deco' },
          ' >'
        ),
        React.createElement(
          'span',
          { className: 'reply_text' },
          reply.text
        )
      );
    });
    return React.createElement(
      'div',
      { className: 'reply_box' },
      questionReplyNodes
    );
  }
});

ReactDOM.render(React.createElement(QuestionBoard, { url: '/question/datas' }), document.querySelector('.question_view'));
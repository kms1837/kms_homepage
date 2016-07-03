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
  displayName: "QuestionList",

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
    var questions = this.state.data;
    var updatefunc = this.updateData;
    return React.createElement(
      "div",
      { className: "question_board" },
      React.createElement(
        "div",
        { className: "question_list" },
        questions.map(function (question) {
          return React.createElement(QuestionBox, { update: updatefunc, key: question.id, data: question });
        })
      )
    );
  }
});

var QuestionBox = React.createClass({
  displayName: "QuestionBox",

  render() {
    var data = this.props.data;
    return React.createElement(
      "div",
      { className: "question_box", itemID: data.id },
      React.createElement(
        "div",
        { className: "question" },
        React.createElement(
          "h3",
          null,
          React.createElement(
            "span",
            { className: "question_id" },
            data.id
          ),
          " ] ",
          data.username,
          " ",
          React.createElement(
            "span",
            { className: "created_at" },
            data.created_at
          )
        ),
        React.createElement(
          "span",
          { className: "question_text" },
          data.text
        )
      ),
      React.createElement(QuestionReply, { key: data.id, data: data.replys }),
      React.createElement(ReplyFrom, { update: this.props.update })
    );
  }
});

var QuestionReply = React.createClass({
  displayName: "QuestionReply",

  render() {
    var questionReplyNodes = this.props.data.map(function (reply) {
      return React.createElement(
        "li",
        { className: "reply" },
        React.createElement(
          "span",
          { className: "reply_deco" },
          " >"
        ),
        React.createElement(
          "span",
          { className: "reply_text" },
          reply.text
        )
      );
    });
    return React.createElement(
      "div",
      { className: "reply_box" },
      React.createElement(
        "ul",
        null,
        questionReplyNodes
      )
    );
  }
});

var ReplyFrom = React.createClass({
  displayName: "ReplyFrom",

  handleSubmit(e) {
    e.preventDefault();

    var form_data = {
      question_id: 0,
      text: e.target.text.value
    };

    var question_box = $(e.target).closest('.question_box');
    var question_id = question_box.attr('itemID');

    $.post('/question/' + question_id + '/reply/insert', form_data);

    this.refs.text.value = '';
    this.props.update();
  },
  render() {
    return React.createElement(
      "form",
      { className: "replyForm", onSubmit: this.handleSubmit },
      React.createElement("input", { type: "text", name: "text", placeholder: "내용을 입력하세요...", ref: "text" }),
      React.createElement("input", { type: "submit", value: "올리기" })
    );
  }
});

var QuestionWrite = React.createClass({
  displayName: "QuestionWrite",

  submitEvent(e) {
    e.preventDefault();

    var form_data = {
      username: e.target.username.value,
      text: e.target.text.value
    };

    $.post('/question/insert', form_data);

    this.props.update();
  },
  render() {
    return React.createElement(
      "form",
      { className: "question_write", name: "question", onSubmit: this.submitEvent },
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          { className: "form_box" },
          React.createElement(
            "label",
            null,
            "name"
          ),
          " ",
          React.createElement("input", { type: "text", name: "username" })
        ),
        React.createElement(
          "li",
          { className: "form_box" },
          React.createElement("textarea", { name: "text" })
        ),
        React.createElement(
          "li",
          { className: "form_box" },
          React.createElement(
            "div",
            { className: "btn_group" },
            React.createElement(
              "button",
              { type: "submit" },
              "Submit"
            )
          )
        )
      )
    );
  }

});

var QuestionView = React.createClass({
  displayName: "QuestionView",

  getInitialState() {
    return { view: React.createElement(QuestionList, { url: "/question/datas" }), btn_name: '글쓰기', view_num: 0 };
  },
  view_change() {
    var nowView = this.state.view_num;
    switch (nowView) {
      case 0:
        this.setState({ view: React.createElement(QuestionWrite, { update: this.view_change }), btn_name: '글쓰기 취소', view_num: 1 });
        break;
      case 1:
        this.setState({ view: React.createElement(QuestionList, { url: "/question/datas" }), btn_name: '글쓰기', view_num: 0 });
        break;
    }
  },
  render() {
    return React.createElement(
      "div",
      { className: "question_board" },
      React.createElement(
        "div",
        { className: "question_view" },
        this.state.view
      ),
      React.createElement(
        "div",
        { className: "edit_bar" },
        React.createElement(
          "div",
          { className: "edit_tool" },
          React.createElement(
            "button",
            { className: "edit_question", onClick: this.view_change },
            this.state.btn_name
          )
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(QuestionView, null), document.querySelector('.content_view'));
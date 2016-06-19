var reply_data = [{ id: 1, text: "답변1이요!" }, { id: 2, text: "답변2이요!" }];

var data = [{ id: 1, username: "Pete Hunt", text: "질문이요!", replys: reply_data }, { id: 2, username: "Jordan Walke", text: "This is *another* comment", replys: reply_data }, { id: 3, username: "Jordan Walke", text: "This is *another* comment", replys: reply_data }, { id: 4, username: "Jordan Walke", text: "This is *another* comment", replys: reply_data }];

var QuestionBoard = React.createClass({
  displayName: "QuestionBoard",

  render: function () {
    return React.createElement(
      "div",
      { className: "question_board" },
      React.createElement(QuestionList, { data: this.props.data })
    );
  }
});

var QuestionList = React.createClass({
  displayName: "QuestionList",

  render: function () {
    var questionNodes = this.props.data.map(function (question) {
      return React.createElement(
        "div",
        { className: "question_box" },
        React.createElement(
          "div",
          { className: "question", key: question.id },
          React.createElement(
            "h3",
            null,
            question.username
          ),
          React.createElement(
            "span",
            { className: "question_text" },
            question.id,
            " : ",
            question.text
          )
        ),
        React.createElement(QuestionReply, { data: question.replys })
      );
    });
    return React.createElement(
      "div",
      { className: "question_list" },
      questionNodes
    );
  }
});

var QuestionReply = React.createClass({
  displayName: "QuestionReply",

  render: function () {
    var questionReplyNodes = this.props.data.map(function (reply) {
      return React.createElement(
        "div",
        { className: "reply", key: reply.id },
        React.createElement(
          "span",
          { className: "reply_deco" },
          " >"
        ),
        React.createElement(
          "span",
          { className: "reply_text" },
          reply.id,
          " : ",
          reply.text
        )
      );
    });
    return React.createElement(
      "div",
      { className: "reply_box" },
      questionReplyNodes
    );
  }
});

ReactDOM.render(React.createElement(QuestionBoard, { data: data }), document.querySelector('.question_view'));
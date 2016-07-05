"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuestionWrite = function (_React$component) {
  _inherits(QuestionWrite, _React$component);

  function QuestionWrite() {
    _classCallCheck(this, QuestionWrite);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(QuestionWrite).apply(this, arguments));
  }

  _createClass(QuestionWrite, [{
    key: "submitEvent",
    value: function submitEvent(e) {
      e.preventDefault();

      var form_data = {
        username: e.target.username.value,
        text: e.target.text.value
      };

      $.post('/question/insert', form_data);

      this.props.update();
    }
  }, {
    key: "render",
    value: function render() {
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
  }]);

  return QuestionWrite;
}(React.component);

exports.default = QuestionWrite;
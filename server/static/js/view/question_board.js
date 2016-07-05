'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _QuestionList = require('./component/QuestionList.js');

var _QuestionList2 = _interopRequireDefault(_QuestionList);

var _QuestionWrite = require('./component/QuestionWrite.js');

var _QuestionWrite2 = _interopRequireDefault(_QuestionWrite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*var reply_data = [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 {id: 1, text: "답변1이요!"},
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 {id: 2, text: "답변2이요!"}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               var data = [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 {id: 1, username: "Pete Hunt", text: "질문이요!", replys:reply_data},
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 {id: 2, username: "Jordan Walke", text: "This is *another* comment", replys:reply_data},
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 {id: 3, username: "Jordan Walke", text: "This is *another* comment", replys:reply_data},
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 {id: 4, username: "Jordan Walke", text: "This is *another* comment", replys:reply_data}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ];*/


var QuestionView = function (_React$component) {
  _inherits(QuestionView, _React$component);

  function QuestionView() {
    _classCallCheck(this, QuestionView);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(QuestionView).call(this));

    _this.state = { view: React.createElement(_QuestionList2.default, { url: '/question/datas' }), btn_name: '글쓰기', view_num: 0 };
    return _this;
  }

  _createClass(QuestionView, [{
    key: 'view_change',
    value: function view_change() {
      var nowView = this.state.view_num;
      switch (nowView) {
        case 0:
          this.setState({ view: React.createElement(_QuestionWrite2.default, { update: this.view_change }), btn_name: '글쓰기 취소', view_num: 1 });
          break;
        case 1:
          this.setState({ view: React.createElement(_QuestionList2.default, { url: '/question/datas' }), btn_name: '글쓰기', view_num: 0 });
          break;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'question_board' },
        React.createElement(
          'div',
          { className: 'question_view' },
          this.state.view
        ),
        React.createElement(
          'div',
          { className: 'edit_bar' },
          React.createElement(
            'div',
            { className: 'edit_tool' },
            React.createElement(
              'button',
              { className: 'edit_question', onClick: this.view_change },
              this.state.btn_name
            )
          )
        )
      );
    }
  }]);

  return QuestionView;
}(React.component);

ReactDOM.render(React.createElement(QuestionView, null), document.querySelector('.content_view'));
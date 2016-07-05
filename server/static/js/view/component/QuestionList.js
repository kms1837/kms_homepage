'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _QuestionBox = require('./QuestionBox.js');

var _QuestionBox2 = _interopRequireDefault(_QuestionBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuestionList = function (_React$component) {
  _inherits(QuestionList, _React$component);

  function QuestionList() {
    _classCallCheck(this, QuestionList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(QuestionList).call(this));

    _this.state = { data: [] };
    return _this;
  }

  _createClass(QuestionList, [{
    key: 'updateData',
    value: function updateData() {
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
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateData();
    } // 컴포넌트가 렌더링 된다음 자동 호출됩니다.

  }, {
    key: 'render',
    value: function render() {
      var questions = this.state.data;
      var updatefunc = this.updateData;
      return React.createElement(
        'div',
        { className: 'question_board' },
        React.createElement(
          'div',
          { className: 'question_list' },
          questions.map(function (question) {
            return React.createElement(_QuestionBox2.default, { update: updatefunc, key: question.id, data: question });
          })
        )
      );
    }
  }]);

  return QuestionList;
}(React.component);

exports.default = QuestionList;
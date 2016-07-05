'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReplyFrom = function (_React$component) {
  _inherits(ReplyFrom, _React$component);

  function ReplyFrom() {
    _classCallCheck(this, ReplyFrom);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ReplyFrom).apply(this, arguments));
  }

  _createClass(ReplyFrom, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
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
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { className: 'replyForm', onSubmit: this.handleSubmit },
        React.createElement('input', { type: 'text', name: 'text', placeholder: '내용을 입력하세요...', ref: 'text' }),
        React.createElement('input', { type: 'submit', value: '올리기' })
      );
    }
  }]);

  return ReplyFrom;
}(React.component);

exports.default = ReplyFrom;
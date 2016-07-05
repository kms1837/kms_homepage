/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _QuestionList = __webpack_require__(1);

	var _QuestionList2 = _interopRequireDefault(_QuestionList);

	var _QuestionWrite = __webpack_require__(4);

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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _QuestionBox = __webpack_require__(2);

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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _QuestionReply = __webpack_require__(3);

	var _QuestionReply2 = _interopRequireDefault(_QuestionReply);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QuestionBox = function (_React$component) {
	    _inherits(QuestionBox, _React$component);

	    function QuestionBox() {
	        _classCallCheck(this, QuestionBox);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(QuestionBox).apply(this, arguments));
	    }

	    _createClass(QuestionBox, [{
	        key: "render",
	        value: function render() {
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
	                React.createElement(_QuestionReply2.default, { key: data.id, data: data.replys }),
	                React.createElement(ReplyFrom, { update: this.props.update })
	            );
	        }
	    }]);

	    return QuestionBox;
	}(React.component);

	exports.default = QuestionBox;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QuestionReply = function (_React$component) {
	  _inherits(QuestionReply, _React$component);

	  function QuestionReply() {
	    _classCallCheck(this, QuestionReply);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(QuestionReply).apply(this, arguments));
	  }

	  _createClass(QuestionReply, [{
	    key: "render",
	    value: function render() {
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
	  }]);

	  return QuestionReply;
	}(React.component);

	exports.default = QuestionReply;

/***/ },
/* 4 */
/***/ function(module, exports) {

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

/***/ }
/******/ ]);
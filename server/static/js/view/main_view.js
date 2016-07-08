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
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Main = function (_React$Component) {
	    _inherits(Main, _React$Component);

	    function Main() {
	        _classCallCheck(this, Main);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).apply(this, arguments));
	    }

	    _createClass(Main, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                { className: "content_view" },
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(
	                        "h1",
	                        null,
	                        "kms1837의 홈페이지 입니다.."
	                    ),
	                    React.createElement(
	                        "p",
	                        null,
	                        "찾아와 주셔서 감사합니다. 이곳에서 저와 소통하거나 재밌게 놀다 가실수 있도록 최선을 다하도록 하겠습니다."
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "icons" },
	                    React.createElement(
	                        "a",
	                        { href: "https://www.github.com/kms1837" },
	                        React.createElement("img", { src: "http://img2.ruliweb.com/mypi/gup/a/194/5/o/4892050260.jpg" })
	                    ),
	                    React.createElement(
	                        "a",
	                        { href: "https://chrome.google.com/webstore/detail/ruliweb-board-support/hckkohbdkadobaoejafijhklaacifphp" },
	                        React.createElement("img", { src: "http://img2.ruliweb.com/mypi/gup/a/194/5/o/4892085100.jpg" })
	                    )
	                )
	            );
	        }
	    }]);

	    return Main;
	}(React.Component);

	ReactDOM.render(React.createElement(Main, null), document.querySelector('.content_view'));

/***/ }
/******/ ]);
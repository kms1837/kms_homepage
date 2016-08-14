'use strict';

Object.defineProperty(exports, "__esModule", {
                    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _app_view = require('../static/js/view/app_view.js');

var _app_view2 = _interopRequireDefault(_app_view);

var _main_view = require('../static/js/view/main_view.js');

var _main_view2 = _interopRequireDefault(_main_view);

var _question_view = require('../static/js/view/question_view.js');

var _question_view2 = _interopRequireDefault(_question_view);

var _rss_view = require('../static/js/view/rss_view.js');

var _rss_view2 = _interopRequireDefault(_rss_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = _react2.default.createElement(
                    _reactRouter.Route,
                    { path: '/', component: _app_view2.default },
                    _react2.default.createElement(_reactRouter.IndexRoute, { component: _main_view2.default }),
                    _react2.default.createElement(_reactRouter.Route, { path: 'home', component: _main_view2.default }),
                    _react2.default.createElement(_reactRouter.Route, { path: 'question_board', component: _question_view2.default }),
                    _react2.default.createElement(_reactRouter.Route, { path: 'resent', component: _rss_view2.default })
);

exports.default = Routes;
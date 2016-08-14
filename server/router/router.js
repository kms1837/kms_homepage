'use strict';

var ruliweb_log = require('../router/log_get');
var main = require('../router/main');
var question = require('../router/question');
var user = require('../router/user');
var sign = require('../router/sign');
var git_rss = require('../router/git_rss_get');
var path = require('path');
var swig = require('swig');

var renderToString = require('react-dom/server').renderToString;

import {match, RouterContext} from 'react-router'
import React from 'react';
import routes from './react_routes.jsx';

module.exports = function (app) {
  app.get('/get_git_rss', git_rss);
  app.get('/ruliweblog', ruliweb_log);
  //app.get('/', main);
  //app.get('/main', main);
  app.use('/question', question);
  app.use('/user', user);
  app.use('/', sign);
  
  app.use(function (request, response) {
    match({ routes: routes, location: request.url }, function (error, redirectLocation, renderProps) {
      if (error) {
        response.status(500).send(error.message);
      } else if (redirectLocation) {
        response.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        var html = renderToString(React.createElement(RouterContext, renderProps));
        var page = swig.renderFile(path.resolve('template', 'layout.html'), { html: html });
        response.status(200).send(page);
      } else {
        response.status(404).send('Not found')
      }
    });
  });
};
'use strict';

var ruliweb_log = require('../router/log_get');
var main = require('../router/main');
var question = require('../router/question');
var user = require('../router/user');
var sign = require('../router/sign');
var git_rss = require('../router/git_rss_get');
var path = require('path');
var swig = require('swig');

var sessionManager = require('../module/session_manager.js');

var renderToString = require('react-dom/server').renderToString;

import {match, RouterContext} from 'react-router'
import React from 'react';
import routes from '../view/react_routes.js';
//import routes from './react_routes.jsx';

module.exports = function (app) {
  app.get('/get_git_rss', git_rss);
  app.get('/ruliweblog', ruliweb_log);
  app.use('/question', question);
  app.use('/user', user);
  app.use('/', sign);
  
  app.use( (request, response) => {
    match({ routes: routes, location: request.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        response.status(500).send(error.message);
        
      } else if (redirectLocation) {
        response.redirect(302, redirectLocation.pathname + redirectLocation.search);
        
      } else if (renderProps) {
        if (request.url === '/sign_in') sessionManager.loginCheck(response, request.session);
        var html = renderToString(React.createElement(RouterContext, renderProps));
        // es5 - React.createElement(RouterContext, renderProps)
        // JSX - <RouterContext {...renderProps}/>
        
        var page = swig.renderFile(path.resolve('template', 'layout.html'), {html: html});
        response.status(200).send(page);
        
      } else {
        response.status(404).send('Not found');
        
      }
    });
  });
};
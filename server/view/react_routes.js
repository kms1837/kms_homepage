
import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './main/app.js';
import Main from './main/main_view.js';

import QuestionBoard from './question_board/question_board.js';
import RssView from './git_rss_reader/git_rss_reader.js';

const Routes = (<Route path = "/" component = {App}>
                    <IndexRoute component = {Main} />
                    <Route path = "home" component = {Main} />
                    <Route path = "question_board" component = {QuestionBoard} />
                    <Route path = "resent" component = {RssView} />
                </Route>);

export default Routes;
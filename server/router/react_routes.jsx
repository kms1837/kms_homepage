
import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../view/main/app.js';
import Main from '../view/main/main_view.js';

import QuestionBoard from '../view/question_board/question_board.js';
import RssView from '../view/git_rss_reader/git_rss_reader.js';

const Routes = (<Route path = "/" component = {App}>
                    <IndexRoute component = {Main} />
                    <Route path = "home" component = {Main} />
                    <Route path = "question_board" component = {QuestionBoard} />
                    <Route path = "resent" component = {RssView} />
                </Route>);

export default Routes;
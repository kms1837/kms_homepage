
import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../static/js/view/app_view.js';
import Main from '../static/js/view/main_view.js';

import QuestionBoard from '../static/js/view/question_view.js';
import RssView from '../static/js/view/rss_view.js';

const Routes = (<Route path = "/" component = {App}>
                    <IndexRoute component = {Main} />
                    <Route path = "home" component = {Main} />
                    <Route path = "question_board" component = {QuestionBoard} />
                    <Route path = "resent" component = {RssView} />
                </Route>);

export default Routes;
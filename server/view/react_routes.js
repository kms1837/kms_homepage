
import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './main/app.js';
import Main from './main/main_view.js';

import QuestionBoard from './question_board/question_board.js';
import RssView from './git_rss_reader/git_rss_reader.js';
import Chat from './chat/chat_view.js';
import Calendar from './calendar/calendar_view.js';

import SignIn from './sign/sign_in_view.js';
import SignUp from './sign/sign_up_view.js';

/*
<Route path="/" component = {App}>
    <IndexRoute component = {Main} />
</Route>
*/
//<IndexRoute component = {Main} />

const Routes = (<Route>
                    <Route path="/" component = {App}>
                        <IndexRoute component = {Main} />
                        <Route path = "home" component = {Main} />
                        <Route path = "question_board" component = {QuestionBoard} />
                        <Route path = "resent" component = {RssView} />
                        <Route path = "chat" component = {Chat} />
                        <Route path = "calendar" component = {Calendar} />
                    </Route>
                    <Route path = "/sign_in" component = {SignIn}></Route>
                    <Route path = "/sign_up" component = {SignUp}></Route>
                </Route>);

export default Routes;
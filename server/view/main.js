import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory} from 'react-router'
import Routes from './react_routes.js'

ReactDOM.render(
    <Router history = {browserHistory} routes={Routes} />,
    document.querySelector('.view')
);

/*
<Router history = {browserHistory}>
        {Routes}
    </Router>
*/
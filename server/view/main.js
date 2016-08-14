import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Routes from './react_routes.js'

ReactDOM.render(
  <Router history = {browserHistory}>
      {Routes}
   </Router>,
  document.querySelector('.view')
);

/*
ReactDOM.render(
  <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {MainView} />
         <Route path = "home" component = {MainView} />
         <Route path = "question_board" component = {QuestionBoard} />
         <Route path = "resent" component = {RssView} />
      </Route>
   </Router>,
  document.querySelector('.view')
);
*/
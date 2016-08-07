import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import QuestionBoard from '../question_board/question_board.js'
import RssView from '../git_rss_reader/git_rss_reader.js'

import RightSide from './component/right_side.js'
import LeftMenus from './component/left_menus.js'

class App extends React.Component
{
    render () {
        return (
            <div className="container">
                <header>
                    <h1>kms.Net</h1>
                </header>
                <LeftMenus/>
                <section className="content">
                    {this.props.children}
                </section>
                <RightSide/>
            </div>
        );
    }
}

class Main extends React.Component
{
    render () {
        return (
            <div className="content_view">
                <div>
                    <h1>kms1837의 홈페이지 입니다..</h1>
                    <p>찾아와 주셔서 감사합니다. 이곳에서 저와 소통하거나 재밌게 놀다 가실수 있도록 최선을 다하도록 하겠습니다.</p>
                </div>
                <div className="icons">
                    <a href="https://www.github.com/kms1837">
                        <img src="http://img2.ruliweb.com/mypi/gup/a/194/5/o/4892050260.jpg"/>
                    </a>
                    <a href="https://chrome.google.com/webstore/detail/ruliweb-board-support/hckkohbdkadobaoejafijhklaacifphp">
                        <img src="http://img2.ruliweb.com/mypi/gup/a/194/5/o/4892085100.jpg"/>
                    </a>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
  <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Main} />
         <Route path = "home" component = {Main} />
         <Route path = "question" component = {QuestionBoard} />
         <Route path = "resent" component = {RssView} />
      </Route>
   </Router>,
  document.querySelector('.wrap')
);
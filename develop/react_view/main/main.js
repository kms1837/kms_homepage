
class Main extends React.Component
{
    render() {
        return(
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
  <Main/>,
  document.querySelector('.content_view')
);
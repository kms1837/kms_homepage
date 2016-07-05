/*var reply_data = [
  {id: 1, text: "답변1이요!"},
  {id: 2, text: "답변2이요!"}
];

var data = [
  {id: 1, username: "Pete Hunt", text: "질문이요!", replys:reply_data},
  {id: 2, username: "Jordan Walke", text: "This is *another* comment", replys:reply_data},
  {id: 3, username: "Jordan Walke", text: "This is *another* comment", replys:reply_data},
  {id: 4, username: "Jordan Walke", text: "This is *another* comment", replys:reply_data}
];*/
import QuestionList from './component/QuestionList.js'
import QuestionWrite from './component/QuestionWrite.js'

class QuestionView extends React.component
{
  constructor(){
    super();
    this.state = {view: <QuestionList url="/question/datas"/>, btn_name : '글쓰기', view_num : 0};
  }
  
  view_change() {
    var nowView = this.state.view_num;
    switch(nowView) {
      case 0:
        this.setState({view: <QuestionWrite update={this.view_change}/>, btn_name : '글쓰기 취소', view_num : 1});
        break;
      case 1:
        this.setState({view: <QuestionList url="/question/datas"/>, btn_name : '글쓰기', view_num : 0});
        break;
    }
  }
  
  render() {
    return (
      <div className="question_board">
        <div className='question_view'>
          {this.state.view}
        </div>
        <div className='edit_bar'>
          <div className="edit_tool">
              <button className='edit_question' onClick={this.view_change}>{this.state.btn_name}</button>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <QuestionView/>,
  document.querySelector('.content_view')
);
import React from 'react';
import QuestionList from './component/QuestionList.js'
import QuestionWrite from './component/QuestionWrite.js'

class QuestionView extends React.Component
{
  constructor() {
    super();
    this.view_change = this.view_change.bind(this);
  }
  
  componentWillMount() {
    console.log(this);
    this.state = {view: <QuestionList permission={this.props.permission} url="/question/"/>, btn_name : '글쓰기', view_num : 0};
  }
  
  view_change() {
    var nowView = this.state.view_num;
    switch(nowView) {
      case 0:
        this.setState({view: <QuestionWrite update={this.view_change}/>, btn_name : '글쓰기 취소', view_num : 1});
        break;
      case 1:
        this.setState({view: <QuestionList permission={this.props.permission} url="/question/"/>, btn_name : '글쓰기', view_num : 0});
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

export default QuestionView;
export {QuestionView};
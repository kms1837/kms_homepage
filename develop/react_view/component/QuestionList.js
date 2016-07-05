import QuestionBox from './QuestionBox.js'

class QuestionList extends React.Component
{
    constructor(){
        super();
        this.updateData = this.updateData.bind(this);
        this.state = {data: []};
    }
 
    updateData() {
        $.ajax({
          url: this.props.url,
          dataType: 'json',
          cache: false,
          success: function(data) {
            console.log(this);
            this.setState({data: data});
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
    }
  
    componentDidMount () {
        this.updateData();
    } // 컴포넌트가 렌더링 된다음 자동 호출됩니다.
  
    render () {
        var questions = this.state.data;
        var updatefunc = this.updateData;
        return (
          <div className="question_board">
            <div className="question_list">
              {questions.map(function(question) {
                return <QuestionBox update={updatefunc} key={question.id} data={question}/>;
              })}
            </div>
          </div>
        );
    }
}

export default QuestionList;
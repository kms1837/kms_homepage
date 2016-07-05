import QuestionReply from './QuestionReply.js'

class QuestionBox extends React.component
{
    render () {
        var data = this.props.data;
        return (
            <div className="question_box" itemID={data.id}>
              <div className="question">
                <h3><span className="question_id">{data.id}</span> ] {data.username} <span className="created_at">{data.created_at}</span></h3>
                <span className="question_text">{data.text}</span>
              </div>
              <QuestionReply key={data.id} data={data.replys}/>
              <ReplyFrom update={this.props.update}/>
            </div>
        );
    }
}

export default QuestionBox;
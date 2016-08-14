import React from 'react';
import QuestionReply from './QuestionReply.js'
import ReplyFrom from './ReplyFrom.js'

class QuestionBox extends React.Component
{
    constructor() {
        super();
        this.question_delete = this.question_delete.bind(this);
    }
    question_delete(event) {
        var question_id = $(event.target).closest('.question_box').attr('itemID');
        
        $.ajax({
          url       : '/question/' + question_id,
          type      : 'DELETE',
          success: function(data) {
            this.props.update();
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
          }
        });
    }
    
    render () {
        var data = this.props.data;
        return (
            <div className="question_box" itemID={data.id}>
              <div className="question">
                <h3>
                    <span className="question_id">{data.id}</span> ] {data.username}
                    <span className="created_at">{data.created_at}<button onClick={this.question_delete}>X</button></span>
                </h3>
                <span className="question_text">{data.text}</span>
              </div>
              <QuestionReply update={this.props.update} key={data.id} data={data.replys}/>
              <ReplyFrom update={this.props.update}/>
            </div>
        );
    }
}

export default QuestionBox;
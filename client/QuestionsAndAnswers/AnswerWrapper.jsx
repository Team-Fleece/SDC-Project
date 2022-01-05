import React from 'react'
import axios from 'axios'

class AnswerWrapper extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      answerData: this.props.answerData
    }
    this.answerHelpful = this.answerHelpful.bind(this)
    this.answerReported = this.answerReported.bind(this)
  }

  convertTime(milliseconds) {
    let date = new Date(milliseconds);

    let modifiedDate = date.toString().split(" ");
    modifiedDate.shift();
    modifiedDate.splice(2, 0, ", ");
    modifiedDate.splice(4, 5);
    modifiedDate.splice(1, 0, " ");
    modifiedDate.join("");
    return modifiedDate;
  }
  answerHelpful() {
    console.log(this.state.answerData)
    let answerID = this.state.answerData.id;

    console.log(answerID)
    axios
    .put(`/qa/answers/${answerID}/helpful`)
    .then(() => {
      console.log(answerID)
      console.log('Marked helpful')
    })
    .catch(() => {
      console.log('failure')
    })
  }

  answerReported() {
    let answerID = this.state.answerData.id;
    axios
    .put(`/qa/answers/${answerID}/report`)
    .then(() => {
      console.log(answerID)
      console.log('Reported')
    })
    .catch(() => {
      console.log('failure')
    })
  }

  render () {
    const date = this.state.answerData.date.split('T')
    return (
      <div className='AnsElementWrapper'>
        <div className='answerHeaderWrapper'>
          <div className='AnswerUsernameText'>
            {'A: '}{this.props.answerData.answerer_name} answers
          </div>
          <div className='answerDate'> {this.convertTime(Date.parse(this.props.answerData.date.slice(0, 10)))}</div>
        </div>
        <div className='AnswerBodyText'>{this.props.answerData.body}</div>
        <div className='QAAHRWrapper'>
          <div className='QAAHelpful'>
            <div>Helpful?</div>
            <div onClick={this.answerHelpful} className='QAAHelpfulTxt'>
              Yes
            </div>
            <div className='QAAHelpfulTxt'>(2)</div>
          </div>
          <div onClick={this.answerReported} className='QAAReport'>
            Report answer?
          </div>
        </div>
      </div>
    )
  }
}
export default AnswerWrapper

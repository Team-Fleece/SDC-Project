import React from 'react'

class AnswerWrapper extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      answerData: this.props.answerData
    }
  }

  render () {
    const date = this.state.answerData.date.split("T")
    return (
      <div className='AnsElementWrapper'>
        <div className="answerHeaderWrapper">
          <div className='AnswerUsernameText'>
            {this.props.answerData.answerer_name} answers
          </div>
          <div className="answerDate"> {date[0]}</div>
        </div>
        <div className='AnswerBodyText'>{this.props.answerData.body}</div>
        <div className='QAAHRWrapper'>
          <div className='QAAHelpful'>
            <div>Helpful?</div>
            <div className='QAAHelpfulTxt'>Yes</div>
            <div className='QAAHelpfulTxt'>(2)</div>
          </div>
          <div className='QAAReport'> Report answer?</div>
        </div>
      </div>
    )
  }
}
export default AnswerWrapper

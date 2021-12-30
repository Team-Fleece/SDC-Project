import React from 'react'

class AnswerWrapper extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      answerData: this.props.answerData
    }
  }

  render () {
    return (
      <div className='AnsElementWrapper'>
        <div className='AnswerText'>{this.props.answerData.body}</div>
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

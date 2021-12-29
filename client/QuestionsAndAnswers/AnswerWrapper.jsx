import React from 'react'

class AnswerWrapper extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div className='AnsElementWrapper'>
        <div className='AnswerText'>A: Yeah it soars</div>
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

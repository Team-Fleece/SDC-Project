import React from 'react'

class AnswerWrapper extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div className='quesAnsElementWrapper'>
        <div className='quesAnsText'>Yeah it soars</div>
        <div className='quesAnsHRWrapper'>
          <div className='quesAHelpful'>
            <div>Helpful?</div>
            <div>Yes</div>
            <div>(2)</div>
          </div>
          <div className='quesAReport'> Report answer?</div>
        </div>
      </div>
    )
  }
}
export default AnswerWrapper

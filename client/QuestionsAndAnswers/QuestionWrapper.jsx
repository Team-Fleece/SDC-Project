import React from 'react'
import AnswersBody from './AnswersBody.jsx'

class QuestionWrapper extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div className='quesElementWrapper'>
        <div className='quesQElementWrapper'>
          <div className='quesQuestionText'>Q: Does it fly?</div>
          <div className='quesQHRWrapper'>
            <div className='quesQHelpful'>
              <div>Helpful?</div>
              <div>Yes</div>
              <div>(2)</div>
            </div>
            <div className='quesQReport'> Report Question?</div>
          </div>
        </div>

        <AnswersBody />
      </div>
    )
  }
}

export default QuestionWrapper

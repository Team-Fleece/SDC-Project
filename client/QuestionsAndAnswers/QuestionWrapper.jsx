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
      <div className='QAElementWrapper'>
        <div className='QuesElementWrapper'>
          <div className='QuestionText'>Q: Does it fly?</div>
          <div className='QAQHRWrapper'>
            <div className='QAQHelpful'>
              <div >Helpful?</div>
              <div className='QAQHelpfulTxt'>Yes</div>
              <div className='QAQHelpfulTxt'>(2)</div>
            </div>
            <div className='QAQReport'> Report Question?</div>
          </div>
        </div>

        <AnswersBody />
      </div>
    )
  }
}

export default QuestionWrapper

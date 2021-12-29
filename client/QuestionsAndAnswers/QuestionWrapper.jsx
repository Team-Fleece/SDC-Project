import React from 'react'

class QuestionWrapper extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='quesElementWrapper'>
        <div className='quesQuestionText'>Q: Does it fly?</div>
        <div className='quesHRWrapper'>
          <div className='quesQHelpful'>
            <div>Helpful?</div>
            <div>Yes</div>
            <div>(2)</div>
          </div>
          <div className='quesQReport'> question reported</div>
        </div>
      </div>
    )
  }
}

export default QuestionWrapper

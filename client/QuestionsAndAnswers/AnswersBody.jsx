import React from 'react'
import AnswerWrapper from './AnswerWrapper.jsx'

class AnswerBody extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      answerArray: this.props.answerArray
    }
  }

  render () {
    const answerArray = this.props.answerArray
    const assembledAnswers = answerArray.map((element, index) => {
     console.log(element)
      return (
        <AnswerWrapper
          key={element.id}
          answerData={element}
        />
      )
    })
    return (
    <div>
      {assembledAnswers}
    </div>
    )
  }
}
export default AnswerBody

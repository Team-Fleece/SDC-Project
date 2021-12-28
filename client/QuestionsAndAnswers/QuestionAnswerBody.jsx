import React from 'react'
import QuestionAnswerElement from './QuestionAnswerElement.jsx'

class QuestionAnswerBody extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <QuestionAnswerElement />
      </div>
    )
  }
}

export default QuestionAnswerBody

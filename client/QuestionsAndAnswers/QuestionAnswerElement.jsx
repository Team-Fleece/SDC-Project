import React from 'react'
import QuestionWrapper from './QuestionWrapper.jsx'




class QuestionAnswerElement extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
<div>
  <QuestionWrapper />
  <AnswersBody />
</div>
    )
  }
}

export default QuestionAnswerElement

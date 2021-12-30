import React from 'react'
import QuestionWrapper from './QuestionWrapper.jsx'

class QuestionAnswerBody extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      questionArray: this.props.questionArray,
      renderedQuestionWrappers: []
    }
    this.parseQuestionArray = this.parseQuestionArray.bind(this)
  }
  componentDidMount () {
    //populate
    //console.log(this.state.questionArray)

    setTimeout(this.parseQuestionArray.bind(this), 500) // TECH DEBT HERE
  }
  componentDidUpdate () {
    //console.log(this.state.questionArray)
  }
  //Function to map out elements
  parseQuestionArray () {
    //console.log('ran parse q array')

    // this.setState({ renderedQuestionWrappers: assembledQuestions })


    // setTimeout(this.parseQuestionArray.bind(this), 5000)
  }

  render () {
    const questionArray = this.props.questionArray
    const assembledQuestions = questionArray.map((element, index) => {
      return <QuestionWrapper
        key={element.question_id.toString()}
        questionData={element}
      />
    })
    // console.log('render time')
    //   console.log(
    //   this.props.questionArray,
    //   ' and ',
    //   assembledQuestions,
    //   ' and also ',
    //   questionArray
    // )
    return (
    <div>{assembledQuestions}</div>
    )
  }
}

export default QuestionAnswerBody

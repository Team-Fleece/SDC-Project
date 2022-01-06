import React from 'react'
import AnswersBody from './AnswersBody.jsx'
import AnswerLoadAndAdd from './AnswerLoadAndAdd.jsx'
import axios from 'axios'

class QuestionWrapper extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      questionData: this.props.questionData,
      answerCount: 0,
      questionHelpCount: this.props.questionData.question_helpfulness,
      loadMoreShown: true,
      firstAnswerArray: [],
      finalAnswerArray: []
    }
    this.loadMoreAnswers = this.loadMoreAnswers.bind(this)
    this.questionHelpful = this.questionHelpful.bind(this)
    this.questionReported = this.questionReported.bind(this)
  }
  componentDidMount () {
    this.loadMoreAnswers()
  }
  componentDidUpdate () {
    //console.log(this.state.questionData)
  }
  convertTime (milliseconds) {
    let date = new Date(milliseconds)

    let modifiedDate = date.toString().split(' ')
    modifiedDate.shift()
    modifiedDate.splice(2, 0, ', ')
    modifiedDate.splice(4, 5)
    modifiedDate.splice(1, 0, ' ')
    modifiedDate.join('')
    return modifiedDate
  }
  questionHelpful () {
    let questionID = this.state.questionData.question_id
    axios
      .put(`/qa/questions/${questionID}/helpful`)
      .then(() => {
        this.setState({questionHelpCount:this.state.questionHelpCount+1})
      })
      .then(() => {
        console.log(questionID)
        console.log('Marked helpful')
      })
      .catch(() => {
        console.log('failure')
      })
  }

  questionReported () {
    let questionID = this.state.questionData.question_id
    axios
      .put(`/qa/questions/${questionID}/report`)
      .then(() => {
        console.log(questionID)
        console.log('Reported')
      })
      .catch(() => {
        console.log('failure')
      })
  }
  loadMoreAnswers () {
    this.setState({ answerCount: (this.state.answerCount += 2) }, () => {
      const answerArray = []
      Object.keys(this.state.questionData.answers).map(element => {
        answerArray.push(this.state.questionData.answers[element])
        //console.log(answerArray)
      })
      this.setState({ firstAnswerArray: answerArray }, () => {
        //console.log (this.state.finalAnswerArray)
        let slicee = [...this.state.firstAnswerArray]
        let slicer = slicee.slice(0, this.state.answerCount)
        //console.log('load more questions did this', slicee, slicer)
        this.setState({ finalAnswerArray: slicer }, () => {
          if (this.state.finalAnswerArray.length >= answerArray.length) {
            this.setState({ loadMoreShown: false }, () => {
              //console.log('answer count is: ', this.state.answerCount)
            })
          }
        })
      })
    })
  }
  render () {
    let questionDate = this.state.questionData.question_date.split('T')

    let questionHelpCount = this.state.questionHelpCount
    //console.log(this.state.questionData)
    let show = this.state.loadMoreShown
    const showHideClassName = show ? 'QAALoadMore' : 'QAALoadMore display-none'
    //console.log(showHideClassName)
    //console.log('Final answer array is: ',this.state.finalAnswerArray,this.state.answerCount,this.state.questionData.question_id)
    return (
      <div className='QAElementWrapper'>
        <div className='QuesElementWrapper'>
          <div className='QAQuestionBody'>
            <div className='QuestionUsernameText'>
              {'Q: '}
              {this.state.questionData.asker_name}
            </div>
            <div className='QuestionText'>
              {this.state.questionData.question_body}
            </div>
          </div>
          <div className='QAQHRWrapper'>
            <div className='questionDate'>
              {this.convertTime(
                Date.parse(this.props.questionData.question_date.slice(0, 10))
              )}
            </div>
            <div className='QAQHelpful'>
              {'Helpful? '}
              <div onClick={this.questionHelpful} className='QAQHelpfulTxt'>
                {'  Yes '}{questionHelpCount}
              </div>
              <div onClick={this.questionReported} className='QAQReport'>
                {''}
                Report Question?
              </div>
            </div>
          </div>
        </div>

        <AnswersBody answerArray={this.state.finalAnswerArray} />
        <AnswerLoadAndAdd
          className={showHideClassName}
          loadMoreAnswers={this.loadMoreAnswers}
          question_id={this.state.questionData.question_id}
        />
      </div>
    )
  }
}

export default QuestionWrapper

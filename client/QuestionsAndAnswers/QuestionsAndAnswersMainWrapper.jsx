/* Author: */
//Import Library Dependencies
import React from 'react'
import axios from 'axios'

//Import Component
import QuestionsAndAnswersHeader from './QuestionsAndAnswersHeader.jsx'
import QuestionAnswerBody from './QuestionAnswerBody.jsx'
import QuestionLoadAndAdd from './QuestionLoadAndAdd.jsx'

class QuestionsAndAnswers extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: 1,
      questionsPerLoad: 20,
      questionArray: [],
      questionsToLoad: 4,
      searchArray: [],
      query: ''
    }
    this.getQuestions = this.getQuestions.bind(this)
    this.loadMoreQuestions = this.loadMoreQuestions.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
    // this.newSearch = this.newSearch.bind(this)
  }
  componentDidMount () {
    //Update state with api data
    //Render some number of QA elements

    this.getQuestions()
  }
  //Functional discussion
  /* HELPER FUNCTIONS */

  //OnChange - Utilized to update question/answer text boxes
  onChange (e) {
    //Event handler, use e.target.value to update state
  }

  loadMoreQuestions () {
    this.setState({ questionsToLoad: this.state.questionsToLoad + 2 })
  }
  getQuestions () {
    //Populate 2 more question and answer elements
    //Call on load?

    //Axios Request
    axios
      .get(
        `/qa/questions/?product_id=${this.props.product_id}&page=${this.state.currentPage}&count=${this.state.questionsPerLoad}`
      )
      .then(res => {
        this.setState({
          questionArray: this.state.questionArray.concat(res.data)
        })
      })
      .then(() => {
        //console.log("getQuestions Fired",this.state.currentPage)
        this.setState({ currentPage: (this.state.currentPage += 1) })
      })
      .then(() => {
        this.setState({searchArray: this.state.questionArray})
      })
      .catch(err => {
        console.log(err)
        console.log('Failed to get more questions')
      })
  }

  onSearchChange (e) {
    this.setState({ query: e.target.value }, () => {
      let newSearchArray = []
      this.state.questionArray.map((question, index) => {
        if (question.question_body.includes(this.state.query)) {
          newSearchArray.push(question)
        }
      })
      this.setState({ searchArray: newSearchArray })
    })
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.product_id !== prevProps.product_id) {
      this.setState({ questionArray: [] }, this.getQuestions())
    }
    if (this.state.query !== prevState.query) {
    }
  }
  render () {
    let questionArray = [...this.state.searchArray]
    let spliceCount = this.state.questionsToLoad
    let remainderQuestions = questionArray.splice(this.state.questionsToLoad)
    return (
      <div className='QABodyWrapper'>
        <QuestionsAndAnswersHeader
          onSearchChange={this.onSearchChange}
          questionArray={questionArray}
          query={this.state.query}
        />
        <QuestionAnswerBody questionArray={questionArray} />
        <QuestionLoadAndAdd
          loadMoreQuestions={this.loadMoreQuestions}
          submitQuestion={this.submitQuestion}
          product_id={this.props.product_id}
          getQuestions
        />
      </div>
    )
  }
}
export { QuestionsAndAnswers }

/* placeholder
<div className='questAns'>
  questAns
  <div className='quesTop'>quesTop</div>
  <div className='quesMid'>quesMid</div>
  <div className='quesBot'>quesBot</div>
</div>

*/

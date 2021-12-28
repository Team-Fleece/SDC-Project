/* Author: */
//Import Library Dependencies
import React from 'react'
class QuestionsAndAnswers extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      //Data needed from api
      //All related questions and answers


      //Data that may be sent to API
      //New Question
      //New Answer (and associated question id)
      //report/helpful tally (and associated Q or A id)
    }
  }

  //Functional discussion
  /* HELPER FUNCTIONS */

  //OnChange - Utilized to update question/answer text boxes
  onChange(e) {//Event handler, use e.target.value to update state

  }


  loadMoreQuestions() {//Populate 2 more question and answer elements

    //Call on load?
  }

  submitAnswer() { //pass answer input value to axios post request, then update question data


  }

  submitQuestion () {//pass question input value to axios post request, then update question data

  }

  /****** QA Helpful/Report Functions ******/
  //QuestionHelpful
  //QuestionReport
  //AnswerHelpful
  //AnswerReport











  componentDidMount() {
    //Update state with api data
    //Render some number of QA elements
  }




render() {
  return (
    <div className='questAns'>
  questAns
  <div className='quesTop'>quesTop</div>
  <div className='quesMid'>quesMid</div>
  <div className='quesBot'>quesBot</div>
</div>

  )
}
}
export { QuestionsAndAnswers }

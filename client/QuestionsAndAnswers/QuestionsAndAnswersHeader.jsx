import React from 'react'
import QASearchButtonIcon from '../assets/QASearchButtonIcon.png'

class QuestionsAndAnswersHeader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }


  render () {
    return (
      <div>
        <div>Questions and Answers</div>
        <form className='quesSearchForm'>
          <input type='text' className='quesSearchField' />
          <button className='quesSearchButton' type='submit'>
            <img src={QASearchButtonIcon} />
          </button>
        </form>
      </div>
    )
  }
}

export default QuestionsAndAnswersHeader

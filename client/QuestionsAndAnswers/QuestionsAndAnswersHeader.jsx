import React from 'react'
import QASearchButtonIcon from '../assets/QASearchButtonIcon.png'
import QASearchClearIcon from '../assets/QASearchClearIcon.png'


class QuestionsAndAnswersHeader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <h4 className='quesAnsHeader'> Questions and Answers </h4>
        <div className='quesSearchForm'>
          <button className='quesSearchButton' type='submit'>
            <img src={QASearchButtonIcon} />
          </button>
          <input type='text' placeholder='Search Questions' className='quesSearchField' />

          <button className='quesSearchClear' type='reset'>
            <img src={QASearchClearIcon} />

          </button>
        </div>
      </div>
    )
  }
}

export default QuestionsAndAnswersHeader

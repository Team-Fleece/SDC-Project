import React from 'react'
import QASearchButtonIcon from '../assets/QASearchButtonIcon.png'
import QASearchClearIcon from '../assets/QAExitIcon.png'


class QuestionsAndAnswersHeader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <form>
        <h2 className='QAHeader'> Questions and Answers </h2>
        <div className='QASearchForm'>
          <input type='text' onChange={this.props.onSearchChange}  placeholder='Have a question?  Search for answers...' className='QASearchField' />

          <button className='QASearchClear' type='reset'>
            <img src={QASearchClearIcon} />

          </button>
        </div>
      </form>
    )
  }
}

export default QuestionsAndAnswersHeader
/*
value={this.props.query}
          <button  className='QASearchButton'>
            <img src={QASearchButtonIcon} />
          </button>
*/
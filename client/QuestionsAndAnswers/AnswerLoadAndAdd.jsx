import React from 'react'
import QAModal from './QAModal.jsx'

class AnswerLoadAndAdd extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isShown:false
    }
  }


  render () {
    return (
      <div className='QALoadAndAddWrapper'>
        <button className='QALoadMore' onClick={this.props.loadMoreAnswers}> Load More Answers</button>
        <QAModal />
      </div>
    )
  }
}

export default AnswerLoadAndAdd

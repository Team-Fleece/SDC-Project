import React from 'react'

class AnswerLoadAndAdd extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }


  render () {
    return (
      <div className='QALoadAndAddWrapper'>
        <button className='QALoadMore' onClick={this.props.loadMoreAnswers}> Load More Answers</button>
        <button className='QAAddQuestion'> Add New Answer </button>
      </div>
    )
  }
}

export default AnswerLoadAndAdd

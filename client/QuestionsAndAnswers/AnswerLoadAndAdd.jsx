import React from 'react'
<<<<<<< HEAD
=======
import QAModal from './QAModal.jsx'
>>>>>>> 9147259a522653f1713bc8719ec7ba913d8b13f0

class AnswerLoadAndAdd extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
<<<<<<< HEAD

=======
      isShown:false
>>>>>>> 9147259a522653f1713bc8719ec7ba913d8b13f0
    }
  }


  render () {
    return (
      <div className='QALoadAndAddWrapper'>
        <button className='QALoadMore' onClick={this.props.loadMoreAnswers}> Load More Answers</button>
<<<<<<< HEAD
        <button className='QAAddQuestion'> Add New Answer </button>
=======
        <QAModal />
>>>>>>> 9147259a522653f1713bc8719ec7ba913d8b13f0
      </div>
    )
  }
}

export default AnswerLoadAndAdd

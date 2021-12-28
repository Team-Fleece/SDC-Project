import React from 'react'

class QALoadAndAdd extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='quesLoadAndAddWrapper'>
        <div className='quesLoadMore'> Load More </div>
        <div className='quesAddQuestion'> Add New Question </div>
      </div>
    )
  }
}

export default QALoadAndAdd

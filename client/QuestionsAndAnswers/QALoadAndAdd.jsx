import React from 'react'

class QALoadAndAdd extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='QALoadAndAddWrapper'>
        <div className='QALoadMore'> Load More </div>
        <div className='QAAddQuestion'> Add New Question </div>
      </div>
    )
  }
}

export default QALoadAndAdd

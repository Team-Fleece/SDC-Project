/* Author: */
//Import Library Dependencies
import React from 'react'

class ProductDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

render() {
  return (
    <div className='overviewWrapper'>
  <div className='overviewLeft'>
    overviewLeft
    <div className='overviewLeft2'>
      <div className='overviewProductImg'>
        <div className='productThumbs'>productThumbs</div>
        overviewProductImg##########
      </div>
    </div>
  </div>
  <div className='overviewRight'>overviewRight</div>
</div>

  )
}
}

export {ProductDetails}
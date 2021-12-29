/* Author: */
//Import Library Dependencies
import React from 'react'
import {ProductGallery} from './ProductGallery.jsx'


class ProductDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

render() {
  return (
    <div className="overviewWrapper">overviewWrapper
    <div className="overviewProductDescriptionContainer">
      <ProductGallery className="overviewImageGallery" product_id={this.props.product_id}/>
      <div className="overviewInformationContainer">
        <div className="overviewReviews">
          overviewReviews
        </div>
        <div className="overviewNameAndCat">
          overviewNameAndCat
        </div>
        <div className="overviewStyle">
          overviewStyle
        </div>
        <div className="overviewSizeSelector">
          overviewSizeSelector
        </div>
        <div className="overviewBagAndStar">
          overviewBagAndStar
        </div>
      </div>
    </div>
    <div className="overviewProductDescriptionContainer">
      <div className="overviewDescriptionText">
        overviewDescriptionText
      </div>
      <div className="overviewDescriptionChecklist">
        overviewDescriptionChecklist
      </div>
    </div>
  </div>
  )
}
}

export {ProductDetails}
/* Author: */
//Import Library Dependencies
import React from 'react'
import {ProductGallery} from './ProductGallery.jsx'
import {onloadState} from './OnLoadData.js'


class ProductDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      productInfo: onloadState,
      currentStylePhotos: onloadState[0].style_photos
    }
  }

render() {
  let currentStylePhotos = this.state.currentStylePhotos;

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    }
  ];



return (
  <div className="overviewWrapper">overviewWrapper
  <div className="overviewProductDescriptionContainer">
    <div className="overviewImageGallery">
    <ProductGallery currentStylePhotos={currentStylePhotos} className="overviewImageGallery" />
    </div>
    <div className="overviewInformationContainer">
      <div className="overviewReviews">
        overviewReviews
      </div>
      <div className="overviewNameAndCat">
        <h4 className="category">CATEGORY{'\n'}</h4>
        <h2><strong>EXPANDED PRODUCT NAME</strong></h2>

      </div>
      <div className="overviewStyle">
      {images.map(image => {
  return <img src={image.thumbnail} className="selectStyle"></img>
})}
      </div>
      <div className="overviewSizeSelector">
      <button className="btn selectSize">SELECT SIZE</button>
        <button className="btn quantity">quantity</button>
      </div>
      <div className="overviewBagAndStar">
        <button className="btn addToBag">ADD TO BAG</button>
        <button className="btn star">STAR</button>
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
/* Author: */
//Import Library Dependencies
import React from 'react'
import $ from 'jquery'
import axios from 'axios'
import ReactDOM from 'react-dom'
import {ProductGallery} from './ProductGallery.jsx'


class ProductDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentProduct: []
    }
    // this.componentDidMount = this.componentDidMount.bind(this);
  }


  // componentDidMount() {
  //   let that = this;
  //   axios.get(`/products/${this.props.product_id}/styles`, {
  //     params: {
  //       productId: this.props.product_id
  //     }
  //   })
  //   .then(function (response) {
  //     // handle success
  //     console.log("RESPONSE: ", response.data)
  //     that.setState({
  //       currentProduct: response.data
  //     })
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  // }

render() {
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
      <ProductGallery product_id={this.props.product_id} productStyle={this.props.currentProduct}/>
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


      // console.log('RESPONSEEEEEE: ', response.data)
      // console.log(response.data);

export {ProductDetails}
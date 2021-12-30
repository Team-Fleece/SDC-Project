import React from 'react'
import $ from 'jquery'
import axios from 'axios'
import ReactDOM from 'react-dom'
import 'react-image-gallery/styles/scss/image-gallery.scss';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import Resizer from "react-image-file-resizer";
import {onLoadImages} from './OnLoadData.js'



class ProductGallery extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentProduct: [],
      styleImages: onLoadImages
    };
    // this.setState = this.setState.bind(this)
    // this.componentDidUpdate = this.componentDidUpdate.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
  }





  render() {
    // console.log('productStyle: ', this.props.productStyle)
    // let currentStylePhoto = this.props.productStyle

    // console.log('currentStylePhoto: ', currentStylePhoto)

    // let that = this;
    // let newImages = this.state.currentProduct[0].photos
    // console.log('NEW IMAGESSSSSS: ', this.state);
    return (
    <ImageGallery
    items={this.state.styleImages}
    thumbnailPosition="left"
    showPlayButton={false}
    lazyLoad={true}
    originalHeight="430px"
    />
    )
  }
}


// console.log('RED PARAMMMMMMMMMMM PRODUCT IDDDDD: ', req.params.productId)



// componentDidMount() {
  //   let that = this;
  //   axios.get(`/products/${this.props.product_id}/styles`, {
  //     params: {
  //       productId: this.props.product_id
  //     }
  //   })
  //   .then(function (response) {
  //     // handle success
  //     console.log('RESPONSEEEEEE: ', response.data)
  //     console.log(response.data);
  //     that.setState({
  //       currentProduct: response.data
  //     })
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  // }

  // componentDidUpdate(prevProps) {
  //   let that = this;
  //   if (prevProps.product_id !== this.prevProps.product_id) {
  //     console.log('currentProduct state has changed.')
  //     axios.get(`/products/${this.props.product_id}/styles`, {
  //       params: {
  //         productId: this.props.product_id
  //       }
  //   })
  //     .then(function (response) {
  //       // handle success
  //       console.log('RESPONSEEEEEE: ', response)
  //       console.log(response);
  //       this.setState({currentProduct: response.data})
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //   }
  // }

export {ProductGallery};
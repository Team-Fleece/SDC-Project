import React from 'react'
import axios from 'axios'
import 'react-image-gallery/styles/scss/image-gallery.scss';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';



class ProductGallery extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentProduct: []
    };
    // this.setState = this.setState.bind(this)
    // this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    let that = this;
    axios.get(`/products/${this.props.product_id}/styles`, {
      params: {
        productId: this.props.product_id
      }
  })
    .then(function (response) {
      // handle success
      console.log('RESPONSEEEEEE: ', response.data)
      console.log(response.data);
      that.setState({currentProduct: response.data})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  // componentDidUpdate(prevProps) {
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



  render() {

  //   axios.get(`/products/${this.props.product_id}/styles`, {
  //     params: {
  //       productId: this.props.product_id
  //     }
  // })
  //   .then(function (response) {
  //     // handle success
  //     console.log('RESPONSEEEEEE: ', response)
  //     console.log(response);
  //     this.setState({
  //       currentProduct: response.data
  //     })
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })


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
    ];
    return <ImageGallery
    items={images}
    thumbnailPosition="left"
    showPlayButton={false}
    lazyLoad={true}
    />;
  }
}


// console.log('RED PARAMMMMMMMMMMM PRODUCT IDDDDD: ', req.params.productId)


export {ProductGallery};
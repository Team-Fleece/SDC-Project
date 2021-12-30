import React from 'react'
import $ from 'jquery'
import axios from 'axios'
import ReactDOM from 'react-dom'
import 'react-image-gallery/styles/scss/image-gallery.scss';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';



class ProductGallery extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentProduct: [],
      styleImages: [
        {
          thumbnail: "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            original: "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        },
        {
            thumbnail: "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            original: "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        },
        {
            thumbnail: "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            original: "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        },
        {
            thumbnail: "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            original: "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        },
        {
            thumbnail: "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            original: "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        },
        {
            thumbnail: "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            original: "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80"
        }
    ]
    };
    // this.setState = this.setState.bind(this)
    // this.componentDidUpdate = this.componentDidUpdate.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
  }





  render() {
    // console.log('productStyle: ', this.props.productStyle)
    // let currentStylePhoto = this.props.productStyle

    // console.log('currentStylePhoto: ', currentStylePhoto)

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
/* Author: */
//Import Library Dependencies
import React from 'react'
import $ from 'jquery'
import axios from 'axios'
import ReactDOM from 'react-dom'

//Import Modules
import {ProductDetails} from './ProductDetails/ProductDetails.jsx'
import {RelatedProducts} from './RelatedProducts/RelatedProducts.jsx'
import {QuestionsAndAnswers} from './QuestionsAndAnswers/QuestionsAndAnswersMainWrapper.jsx'
import {RatingsAndReviews} from './RatingsAndReviews/RatingsAndReviews.jsx'
import {ProductGallery} from './ProductDetails/ProductGallery.jsx'


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      product_id: 37311,
      currentProduct: [{
        default: true,
name: "",
original_price: "",
photos: [],
sale_price: null,
skus: {},
style_id: 220998
      }]
    }
    this.getStyles = this.getStyles.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this)
    // this.setState = this.setState.bind(this)
  }
  getStyles() {
    let that = this;
    axios.get(`/products/${this.state.product_id}/styles`, {
      params: {
        productId: this.state.product_id
      }
  })
    .then(function (response) {
      // handle success
      // console.log('RESPONSEEEEEE: ', response.data)
      console.log(response.data);
      that.setState({currentProduct: response.data})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

  }

  componentDidMount() {
    this.getStyles();
  }


  render(){
    return(
      <div className='App'>
        <div className='container'>
          <div className='header'>header</div>
          <div className='banner'>banner</div>
          <div className='wrapper'>
            <ProductDetails product_id={this.state.product_id} currentProduct={this.state.currentProduct}/>
            <RelatedProducts />
            <QuestionsAndAnswers />
            <RatingsAndReviews />



          </div>
          <div className='footer'>footer</div>
        </div>
      </div>
    );
  }
}
export { App }

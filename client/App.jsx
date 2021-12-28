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

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      product_id: 38204
    }
  }
  render(){
    return(
      <div className='App'>
        <div className='container'>
          <div className='header'>header</div>
          <div className='banner'>banner</div>
          <div className='wrapper'>
            <ProductDetails />
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

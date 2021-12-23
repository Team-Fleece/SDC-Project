/* Author: */
//Import Library Dependencies
import React from 'react'
import axios from 'axios'

//Import Modules
import ProductDetails from './ProductDetails/ProductDetails.jsx'
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx'
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx'
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shitWorks: true
    }
  }
  render() {
    return (<div>Hello World!</div>)
  }
}
export {App}
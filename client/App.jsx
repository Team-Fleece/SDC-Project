/* Author: */
//Import Library Dependencies
import React from "react";
import $ from "jquery";
import axios from "axios";
import ReactDOM from "react-dom";

//Import Modules
import {ProductDetails} from './ProductDetails/ProductDetails.jsx'
import {RelatedProducts} from './RelatedProducts/RelatedProducts.jsx'
import {QuestionsAndAnswers} from './QuestionsAndAnswers/QuestionsAndAnswersMainWrapper.jsx'
import {RatingsAndReviews} from './RatingsAndReviews/RatingsAndReviews.jsx'
import {ProductGallery} from './ProductDetails/ProductGallery.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 38204,
      reviews: [],
      ratings: {},
      recommendedPercentage: 0,
      ratingsCount: 0,
    };
  }
  getMetadata() {
    let that = this;

    axios
      .get(`/reviews/meta?product_id=${this.state.product_id}`)
      .then(function (response) {
        that.setState({
          ratings: response.data.ratings,
          recommendedPercentage: response.data.recommended,
          ratingsCount: response.data.ratingsCount,
        });
      })
      .catch(function (error) {
        console.log("Metadata GET Error:", error);
      });
  }
  getReviews() {
    let that = this;
    axios
      .get(`/reviews?product_id=${this.state.product_id}&count=2&sort=relevant`)
      .then(function (response) {
        console.log("response Data:", response.data.results);
        that.setState({
          reviews: response.data.results,
        });
      })
      .catch(function (error) {
        console.log("Reviews GET Error:", error);
      });
  }
  componentDidMount() {
    this.getMetadata();
    this.getReviews();
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="header">header</div>
          <div className="banner">banner</div>
          <div className="wrapper">
            <ProductDetails />
            <RelatedProducts />
            <QuestionsAndAnswers />
            <RatingsAndReviews
              ratings={this.state.ratings}
              recommended={this.state.recommendedPercentage}
              reviews={this.state.reviews}
            />
          </div>
          <div className="footer">footer</div>
        </div>
      </div>
    );
  }
}
export { App };

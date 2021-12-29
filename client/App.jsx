/* Author: */
//Import Library Dependencies
import React from "react";
import $ from "jquery";
import axios from "axios";
import ReactDOM from "react-dom";

//Import Modules
import { ProductDetails } from "./ProductDetails/ProductDetails.jsx";
import { RelatedProducts } from "./RelatedProducts/RelatedProducts.jsx";
import { QuestionsAndAnswers } from "./QuestionsAndAnswers/QuestionsAndAnswersMainWrapper.jsx";
import { RatingsAndReviews } from "./RatingsAndReviews/RatingsAndReviews.jsx";
import { ProductGallery } from "./ProductDetails/ProductGallery.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 38204,
      reviews: [],
      reviewCount: 2,
      ratings: {},
      recommendedPercentage: 0,
    };
    this.onMoreReviewsClick = this.onMoreReviewsClick.bind(this);
    this.getReviews = this.getReviews.bind(this);
  }
  getMetadata() {
    let that = this;

    axios
      .get(`/reviews/meta?product_id=${this.state.product_id}`)
      .then(function (response) {
        that.setState({
          ratings: response.data.ratings,
          recommendedPercentage: response.data.recommended,
        });
      })
      .catch(function (error) {
        console.log("Metadata GET Error:", error);
      });
  }
  getReviews() {
    let that = this;
    axios
      .get(
        `/reviews?product_id=${this.state.product_id}&count=${this.state.reviewCount}&sort=relevant`
      )
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
  onMoreReviewsClick(callback) {
    let that = this;

    let newCount = this.state.reviewCount + 2;

    let addReviews = () => {
      return new Promise(function (resolve, reject) {
        that.setState({ reviewCount: newCount }, function (error, result) {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      });
    };
    addReviews()
      .then(function (result) {
        that.getReviews();
      })
      .catch(function (error) {
        console.log("More Reviews Error:", error);
      });
  }

  componentDidMount () {
    this.getMetadata()
    this.getReviews()
  }
  render() {
    return (
      <div id="App" className='App'>
        <div className='container'>
          <div className='header'>header</div>
          <div className='banner'>banner</div>
          <div className='wrapper'>
            <ProductDetails product_id={this.state.product_id} />
            <RelatedProducts product_id={this.state.product_id} />
            <QuestionsAndAnswers product_id={this.state.product_id} />
            <RatingsAndReviews
              ratings={this.state.ratings}
              recommended={this.state.recommendedPercentage}
              reviews={this.state.reviews}
              onClick={this.onMoreReviewsClick}
            />
          </div>
          <div className="footer">footer</div>
        </div>
      </div>
    );
  }
}
export { App };

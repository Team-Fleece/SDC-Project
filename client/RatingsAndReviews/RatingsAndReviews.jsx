/* Author: */
//Import Library Dependencies
import React from "react";
import ReviewList from "./ReviewList.jsx";
import RatingsBreakdown from "./RatingsBreakdown.jsx";
import MoreReviewsButton from "./MoreReviewsButton.jsx";
import SortReviews from "./SortReviews.jsx";
import axios from "axios";
import ProductBreakdown from "./ProductBreakdown.jsx";
import Modal from "./NewReviewModal.jsx";
import ReviewModalForm from "./ReviewModalForm.jsx";
// let RatingsAndReviews = (props) => {
//   //console.log("ratings and reviews props:", props);

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: this.props.product_id,
      currentProductInfo: {},
      reviews: [],
      reviewCount: 2,
      ratings: {},
      recommendedPercentage: 0,
      ratingsCount: 0,
      characteristics: {},
      sort: "relevant",
      onereviews: [],
      tworeviews: [],
      threereviews: [],
      fourreviews: [],
      fivereviews: [],
      backupreviews: [],
      showOne: false,
      showTwo: false,
      showThree: false,
      showFour: false,
      showFive: false,
    };
    this.onMoreReviewsClick = this.onMoreReviewsClick.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getMetadata = this.getMetadata.bind(this);
    this.onSortSelection = this.onSortSelection.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.getCurrentProductInfo = this.getCurrentProductInfo.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  getCurrentProductInfo() {
    let that = this;
    axios
      .get(`/products/${this.props.product_id}`)
      .then(function (response) {
        that.setState({
          currentProductInfo: response.data,
        });
      })
      .catch(function (error) {
        console.log("Product Info GET Error:", error);
      });
  }
  getMetadata() {
    let that = this;

    axios
      .get(`/reviews/meta?product_id=${this.props.product_id}`)
      .then(function (response) {
        that.setState({
          ratings: response.data.ratings,
          recommendedPercentage: response.data.recommended,
          ratingsCount: response.data.ratings.ratingsCount,
          characteristics: response.data.characteristics,
        });
      })
      .catch(function (error) {
        console.log("Metadata GET Error:", error);
      });
  }
  getReviews() {
    let that = this;
    let onereviewsArr = [];
    let tworeviewsArr = [];
    let threereviewsArr = [];
    let fourreviewsArr = [];
    let fivereviewsArr = [];

    axios
      .get(
        `/reviews?product_id=${this.props.product_id}&count=${this.state.reviewCount}&sort=${this.state.sort}`
      )
      .then(function (response) {
        console.log("getreviews data:", response.data);
        response.data.results.forEach((review) => {
          if (review.rating === 1) {
            onereviewsArr.push(review);
          }
          if (review.rating === 2) {
            tworeviewsArr.push(review);
          }
          if (review.rating === 3) {
            threereviewsArr.push(review);
          }
          if (review.rating === 4) {
            fourreviewsArr.push(review);
          }
          if (review.rating === 5) {
            fivereviewsArr.push(review);
          }
        });
        that.setState({
          reviews: response.data.results,
          onereviews: onereviewsArr,
          tworeviews: tworeviewsArr,
          threereviews: threereviewsArr,
          fourreviews: fourreviewsArr,
          fivereviews: fivereviewsArr,
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
  onSortSelection(e) {
    let that = this;
    let newSort = e.target.value;

    let changeReviews = () => {
      return new Promise(function (resolve, reject) {
        that.setState({ sort: newSort }, function (error, result) {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      });
    };
    changeReviews()
      .then(function (result) {
        that.getReviews();
      })
      .catch(function (error) {
        console.log("Change Reviews Error:", error);
      });
  }
  onClick(e) {
    let value = e.target.value;
    if (this.state[value] === false) {
      this.setState({ [value]: true });
    } else if (this.state[value] === true) {
      this.setState({ [value]: false });
    }
    // let count = 0;
    // let tempReviews = [];
    // let showingObj = {
    //   showOne: 'onereviews',
    //   showTwo: 'tworeviews',
    //   showThree: 'threereviews',
    //   showFour: 'fourreviews',
    //   showFive: 'fivereviews'
    // };
    // for (var key in showingObj) {
    //   if (this.state[key] === true) {
    //     tempReviews.push(this.state[showingObj[key]])
    //     count++;
    //   }
    // }
    // console.log ('temp reviews:', tempReviews);
    // if (count === 0) {
    //   this.getReviews();
    // }
    // if (count > 0) {
    //   this.setState({reviews: tempReviews});
    // }

  }
  componentDidMount() {
    this.getMetadata();
    this.getReviews();
    this.getCurrentProductInfo();
  }

  componentDidUpdate(prevProps) {
    if (this.props.product_id !== prevProps.product_id) {
      this.getMetadata();
      this.getReviews();
      this.getCurrentProductInfo();
    }
  }
  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }
  render() {
    return (
      <div className="rateRev">
        rateRev
        <div className="ratings">
          <RatingsBreakdown
            ratings={this.state.ratings}
            recommended={this.state.recommendedPercentage}
            ratingsCount={this.state.ratingsCount}
            getReviews={this.getReviews}
            onereviews={this.state.onereviews}
            tworeviews={this.state.tworeviews}
            threereviews={this.state.threereviews}
            fourreviews={this.state.fourreviews}
            fivereviews={this.state.fivereviews}
            click={this.onClick}
          />
          <ProductBreakdown characteristics={this.state.characteristics} />
        </div>
        <div className="reviews">
          reviews
          <SortReviews
            sort={this.state.sort}
            ratingsCount={this.state.ratingsCount}
            onSortSelection={this.onSortSelection}
          />
          <ReviewList reviews={this.state.reviews} getRevs={this.getReviews} />
          <MoreReviewsButton onClick={this.onMoreReviewsClick} />
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <h1>Write Your Review</h1>
            <div>About the {this.state.currentProductInfo.name}</div>
            <ReviewModalForm
              characteristics={Object.keys(this.state.characteristics)}
            />
          </Modal>
          <button className="ReviewsButtons" onClick={this.showModal}>
            Add A Review
          </button>
        </div>
      </div>
    );
  }
}
export { RatingsAndReviews };

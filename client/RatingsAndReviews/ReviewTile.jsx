import React from "react";
import ReviewImages from "./ReviewImages.jsx";
class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {this.props.reviews.map((review) => (
          <div key={review.review_id}>
            <div>User: {review.reviewer_name}</div>
            <div>Date: {review.date}</div>
            <div>Summary: {review.summary}</div>
            <div>Body: {review.body}</div>
            <div>Helpful? Yes({review.helpfulness})</div>
            <div>Response:{review.response}</div>
            <ReviewImages images={review.photos} />
          </div>
        ))}
      </>
    );
  }
}
export default ReviewTile;

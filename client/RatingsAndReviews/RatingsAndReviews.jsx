/* Author: */
//Import Library Dependencies
import React from "react";
import ReviewList from "./ReviewList.jsx";
import RatingsBreakdown from "./RatingsBreakdown.jsx";
import MoreReviewsButton from './MoreReviewsButton.jsx';

let RatingsAndReviews = (props) => {
  //console.log("ratings and reviews props:", props);
  return (
    <div className="rateRev">
      rateRev
      <div className="ratings">
        <RatingsBreakdown
          ratings={props.ratings}
          recommended={props.recommended}
        />
      </div>
      <div className="reviews">
        reviews
        <ReviewList reviews={props.reviews} />
        <MoreReviewsButton onClick={props.onClick}/>
      </div>
    </div>
  );
};
export { RatingsAndReviews };

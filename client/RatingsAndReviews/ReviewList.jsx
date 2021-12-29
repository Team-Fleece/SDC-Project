import React from "react";
import ReviewTile from "./ReviewTile.jsx";

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <ReviewTile reviews={this.props.reviews} />
      </>
    );
  }
}
export default ReviewList;

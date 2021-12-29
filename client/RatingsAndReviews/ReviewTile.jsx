import React from 'react'
import ReviewImages from './ReviewImages.jsx'
class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {


    return (
      <>
        {this.props.reviews.map((review) => (
          <div key={review.review_id}>
            <div>{review.summary}</div>
            <div>{review.body}</div>
            <ReviewImages images={review.photos}/>
          </div>
        ))}


      </>
    )
  }
}
export default ReviewTile
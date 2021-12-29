/* Author: */
//Import Library Dependencies
import React from 'react'
import ReviewList from './ReviewList.jsx'
import RatingsBreakdown from './RatingsBreakdown.jsx'


let RatingsAndReviews = (props) => {
  console.log(props);
  return (
    <div className='rateRev'>rateRev
      <div className='ratings'>
        <RatingsBreakdown ratings={props.ratings}/>
      </div>
      <div className='reviews'>reviews
        <ReviewList />
      </div>

    </div>

  )

}
export {RatingsAndReviews}
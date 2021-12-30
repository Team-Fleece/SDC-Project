import React from 'react';

let MoreReviewsButton = (props) => {
  return (

    <button onClick={() => {props.onClick();}}>More Reviews</button>
  );
}
export default MoreReviewsButton;
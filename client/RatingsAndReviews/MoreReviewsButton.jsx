import React from 'react';

let MoreReviewsButton = (props) => {
  const showHideClassName = props.show ? "modal MoreReviewsButtons" : "display-none";
  return (

    <button className="MoreReviewsButtons" onClick={() => {props.onClick();}}>More Reviews</button>
  );
}
export default MoreReviewsButton;
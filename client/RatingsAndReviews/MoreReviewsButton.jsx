import React from 'react';

let MoreReviewsButton = (props) => {
  const showHideClassName = props.show ? "MoreReviewsButtons" : "display-none";
  return (

    <button className={showHideClassName} onClick={() => {props.onClick();}}>More Reviews</button>
  );
}
export default MoreReviewsButton;
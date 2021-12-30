import React from "react";

let ReviewImages = (props) => {
  return (
    <div>
      {props.images.map((image) => (
        <img className="reviewImage" src={image.url} key={image.id} />
      ))}
    </div>
  );
};
export default ReviewImages;

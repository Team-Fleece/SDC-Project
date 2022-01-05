import React from 'react';

let LoadModalImage = (props) => {
  return (
    <div className="modalImagediv">
      <img className="modalImage" src={props.image}/>
    </div>
  )
}

export default LoadModalImage;
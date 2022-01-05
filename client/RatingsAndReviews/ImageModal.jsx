import '../../bundle/styles.css';
import React from 'react';
import QAExitIcon from '../assets/QAExitIcon.png'
const ImageModal = ({ handleClose, show, children, name }) => {
  const showHideClassName = show ? "modal imagemodaldisplay" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="imagemodal-main">
        {children}
        <br></br>
        <div className="closeModal">
          <br></br>

        </div>
        <div className="modalClose">
          <button className="ImageModalExit" type="button" name={name} onClick={handleClose}> Close

          </button>
        </div>
      </section>
    </div>
  );
};

export default ImageModal;

{/* <img src={QAExitIcon}/> */}
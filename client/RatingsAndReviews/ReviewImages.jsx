import React from "react";
import ImageModal from "./ImageModal.jsx";
import LoadModalImage from "./LoadModalImage.jsx";

// let ReviewImages = (props) => {

class ReviewImages extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
    };
    this.renderImages = this.renderImages.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  showModal(e) {
    this.setState({ [e.target.name]: true });
  }
  hideModal(e) {
    this.setState({ [e.target.name]: false });
  }
  renderImages() {
    if (this.props.images !== undefined) {
      return this.props.images.map((image, i) => (

        <div className="ratingimages" style={{ gridColumn: i + 1 }}>
          <ImageModal image={image.url} show={this.state[`show${i + 1}`]} handleClose={this.hideModal} name={`show${i + 1}`}>
            <LoadModalImage image={image.url} />
          </ImageModal>
          <img className="reviewImage" src={image.url} key={image.id} name={`show${i + 1}`} onClick={this.showModal}/>
        </div>


      ))
    }
  }
  // <ImageComponent src={image.url} key={image.id} column={i + 1}/>
  render () {
    return (
      <>
        {this.renderImages()}
      </>

    );
  }
};
export default ReviewImages;


// {/* <div className="ratingimages" style={{ gridColumn: i + 1 }}>
// <ImageModal image={image.url} show={this.state.show} handleClose={this.hideModal}>
//   <LoadModalImage image={image.url} />
// </ImageModal>
// <img className="reviewImage" src={image.url} key={image.id}  onClick={this.showModal}/>


// </div> */}

// {/* <IndividualImage image={image.url} style={{ gridColumn: i + 1 }} key={image.id} /> */}
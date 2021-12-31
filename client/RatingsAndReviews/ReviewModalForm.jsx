import React from "react";
import OverallRating from './OverallRating.jsx'
import axios from 'axios';
import StarRatings from 'react-star-ratings';
class ReviewModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: "",
      name: "",
      email: "",
      body: "",
      images: [],
      Size: 0,
      Width: 0,
      Comfort: 0,
      Quality: 0,
      Length: 0,
      Fit: 0,
      selectedRecommend: '',
      rating: 0
    };
    this.renderCharacteristicRadioButtons =
    this.renderCharacteristicRadioButtons.bind(this);
    this.onChange = this.onChange.bind(this);
    this.characterCount = this.characterCount.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.renderUploadedImages = this.renderUploadedImages.bind(this);
    this.imageUploaderButton = this.imageUploaderButton.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeRating = this.changeRating.bind(this);
  }
  renderCharacteristicRadioButtons(characteristicsKeys) {
    if (characteristicsKeys.length !== undefined) {

      let characteristicOptions = {
        Size: {
          1: "A size too small",
          2: `${1 / 2} a size too small`,
          3: "Perfect",
          4: `${1 / 2} a size too big`,
          5: "A size too wide",
        },
        Width: {
          1: "Too narrow",
          2: "Slightly narrow",
          3: "Perfect",
          4: "Slightly wide",
          5: "Too wide",
        },
        Comfort: {
          1: "Uncomfortable",
          2: "Slightly uncomfortable",
          3: "Ok",
          4: "Comfortable",
          5: "Perfect",
        },
        Quality: {
          1: "Poor",
          2: "Below average",
          3: "What I expected",
          4: "Pretty great",
          5: "Perfect",
        },
        Length: {
          1: "Runs short",
          2: "Runs slightly short",
          3: "Perfect",
          4: "Runs slightly long",
          5: "Runs long",
        },
        Fit: {
          1: "Runs tight",
          2: "Runs slightly tight",
          3: "Perfect",
          4: "Runs slightly long",
          5: "Runs long",
        },
      };
      return characteristicsKeys.map((key) => (
        <label>
          {key}:
          <input name={key} value={1} type="radio" onChange={this.handleRadioChange}/>
          {characteristicOptions[key]["1"]}
          <input name={key} value={2}  type="radio" onChange={this.handleRadioChange} />2
          <input name={key} value={3}  type="radio" onChange={this.handleRadioChange} />3
          <input name={key} value={4}  type="radio" onChange={this.handleRadioChange} />4
          <input name={key} value={5}  type="radio" onChange={this.handleRadioChange} />
          {characteristicOptions[key]["5"]}
          <br></br>
          <br></br>
        </label>
      ));
    }
  }
  handleRadioChange(e){
    this.changeValue(e.target.name, e.target.value);
  }
  changeValue(name, newValue) {
    this.setState({[name]: newValue});
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  characterCount() {
    let count = 50 - this.state.body.length;
    if (count > 0) {
      return <div>Minimum required characters left: {count}</div>;
    } else {
      return <div>Minimum reached </div>;
    }
  }
  onImageChange(e) {
    let newImages = this.state.images;
    if (e.target.files) {
      console.log(e.target.files);

      let img = e.target.files[0];
      let imgURL = URL.createObjectURL(img);

      newImages.push(imgURL);

      this.setState({
        images: newImages,
      });
    }
  }
  renderUploadedImages() {
    if (this.state.images.length > 0) {
      return this.state.images.map((image) => (
        <div>
          <img className="uploads" src={image} />
        </div>
      ));
    }
  }
  imageUploaderButton() {
    if (this.state.images.length < 5) {
      return (
        <div>
          <h1>Select Image</h1>
          <input
            type="file"
            multiple
            name="myImage"
            onChange={this.onImageChange}
          />
        </div>
      );
    }
  }
  postReview() {
    if (this.props.characteristics !== undefined) {

      let reviewObj = {
        product_id: this.props.product_id,
        rating: this.state.rating,
        summary: this.state.summary,
        body: this.state.body,
        recommend: null,
        name: this.state.name,
        email: this.state.email,
        photos: this.state.images,
        characteristics: {}
      }
      if (this.state.selectedRecommend === 'true') {
        reviewObj['recommend'] = true;
      }
      if (this.state.selectedRecommend === 'false') {
        reviewObj['recommend'] = false;
      }
      let characteristicsObj = {};
      for(var key in this.props.characteristics) {
        characteristicsObj[this.props.characteristics[key]['id']] = Number(this.state[key]);
      }
      reviewObj['characteristics'] = characteristicsObj;
      console.log('reviewObj:', reviewObj);
      axios.post('/reviews', reviewObj)
        .then(function(response) {
          console.log('here is the response that worked:', response);
        })
        .catch(function(error) {
          console.log('post review error:', error);
        });

    }
  }
  changeRating( newRating, name ) {
    this.setState({
      rating: newRating
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.postReview();
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
        <br></br>
            <br></br>
          <label>
            What is your nickname: *
            <input
              type="text"
              name="name"
              maxLength="60"
              placeholder="Example: jackson11!"
              onChange={this.onChange}
            />
            <br></br>
            <br></br>
          </label>
          <label>
            Your email: *
            <input
              type="text"
              name="email"
              maxLength="60"
              placeholder="Example: jackson11@email.com"
              onChange={this.onChange}
            />
            <br></br>
            <br></br>
          </label>
          <label>
            Overall Rating *
            <>
              <StarRatings
                rating={this.state.rating}
                starRatedColor="blue"
                changeRating={this.changeRating}
                numberOfStars={5}
                name='rating'
                starDimension="15px"
                starSpacing="5px"
              />
            </>
            <br></br>
            <br></br>
          </label>
          <label>
            Do you recommend this product? *
            <input type="radio" name="selectedRecommend" onChange={this.handleRadioChange} value={true} />
            Yes
            <input type="radio" name="selectedRecommend" onChange={this.handleRadioChange} value={false} />
            No
            <br></br>
            <br></br>
          </label>
          <div>Characteristics *</div>
          {this.renderCharacteristicRadioButtons(Object.keys(this.props.characteristics))}
          <label>
            Review summary:<br></br>
            <input
              className="summaryInput"
              type="text"
              name="summary"
              maxLength="60"
              value={this.state.summary}
              onChange={this.onChange}
              placeholder="Example: Best Purchase Ever!"
            />
            <br></br>
            <br></br>
          </label>
          <label>
            Review body: *<br></br>
            <input
              className="bodyInput"
              type="text"
              name="body"
              minLength="50"
              maxLength="1000"
              value={this.state.body}
              onChange={this.onChange}
              placeholder="Why did you like the product or not?"
            />
            <br></br>
            {this.characterCount()}
            <br></br>
          </label>
          {this.renderUploadedImages()}
          {this.imageUploaderButton()}
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default ReviewModalForm;

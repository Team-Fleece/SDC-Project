import React from 'react';

class StarRatingsInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      onestar: 1,
      twostar: 2,
      threestar: 3,
      fourstar: 4,
      fivestar: 5,
      rating: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.starRender = this.starRender.bind(this);
  }
  handleClick(event) {
    let that = this;
    let value = event.target.attributes.getNamedItem('name').value;
    console.log('event target:', event.target);
    console.log('event value:', value);
    let makeRating = () => {
      return new Promise(function (resolve, reject) {
        that.setState({rating: that.state[value], [value]: true}, function (error, result) {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      });
    };
    makeRating()
      .then(function (result) {
        that.starRender();
      })
      .then(function(result) {
        that.props.captureRating(that.state.rating)
      })
      .catch(function (error) {
        console.log('Star Clicking Error:', error);
      })

  }
  starRender() {
    let starObj = this.state;
    console.log('our starObj:', starObj);
    if (starObj.onestar === true) {


      return (
        <div className="starblock">
          <div  className="starchoose" name="onestar" onClick={this.handleClick}>&#9733; </div>
          <div className="starchoose" name="twostar" onClick={this.handleClick}>&#9734; </div>
          <div className="starchoose" name="threestar" onClick={this.handleClick}>&#9734; </div>
          <div className="starchoose" name="fourstar" onClick={this.handleClick}>&#9734; </div>
          <div className="starchoose" name="fivestar" onClick={this.handleClick}>&#9734; </div>
        </div>
        );
      }
      if (starObj.twostar === true) {

        return (
          <div className="starblock">
          <div  className="starchoose" name="onestar" onClick={this.handleClick}>&#9733; </div>
          <div className="starchoose" name="twostar" onClick={this.handleClick}>&#9733; </div>
          <div className="starchoose" name="threestar" onClick={this.handleClick}>&#9734; </div>
          <div className="starchoose" name="fourstar" onClick={this.handleClick}>&#9734; </div>
          <div className="starchoose" name="fivestar" onClick={this.handleClick}>&#9734; </div>
       </div>
        );
      }
      if (starObj.threestar === true) {

        return (
          <div className="starblock">
          <div  className="starchoose" name="onestar" onClick={this.handleClick}>&#9733; </div>
          <div className="starchoose" name="twostar" onClick={this.handleClick}>&#9733; </div>
          <div className="starchoose" name="threestar" onClick={this.handleClick}>&#9733; </div>
          <div className="starchoose" name="fourstar" onClick={this.handleClick}>&#9734; </div>
          <div className="starchoose" name="fivestar" onClick={this.handleClick}>&#9734; </div>
       </div>
        );
      }
      if (starObj.fourstar === true) {

        return (
          <div className="starblock">
          <div  className="starchoose" name="onestar" onClick={this.handleClick}>&#9733; </div>
          <div className="starchoose" name="twostar" onClick={this.handleClick}>&#9733; </div>
          <div className="starchoose" name="threestar" onClick={this.handleClick}>&#9733; </div>
          <div className="starchoose" name="fourstar" onClick={this.handleClick}>&#9733; </div>
          <div className="starchoose" name="fivestar" onClick={this.handleClick}>&#9734; </div>
       </div>
        );
      }
      if (starObj.fivestar === true) {

        return (
          <div className="starblock">
          <div  className="starchoose" name="onestar" onClick={this.handleClick}>&#9733; </div>
          <div className="starchoose" name="twostar" onClick={this.handleClick}>&#9733; </div>
          <div className="starchoose" name="threestar" onClick={this.handleClick}>&#9733; </div>
          <div className="starchoose" name="fourstar" onClick={this.handleClick}>&#9733; </div>
          <div className="starchoose" name="fivestar" onClick={this.handleClick}>&#9733; </div>
       </div>
        );
      }
      if (starObj.onestar === 1 && starObj.twostar === 2 && starObj.threestar === 3 && starObj.fourstar === 4 && starObj.fivestar === 5) {
        return (
          <div className="starblock">
            <div  className="starchoose" name="onestar" onClick={this.handleClick}>&#9734; </div>
            <div className="starchoose" name="twostar" onClick={this.handleClick}>&#9734; </div>
            <div className="starchoose" name="threestar" onClick={this.handleClick}>&#9734; </div>
            <div className="starchoose" name="fourstar" onClick={this.handleClick}>&#9734; </div>
            <div className="starchoose" name="fivestar" onClick={this.handleClick}>&#9734; </div>
          </div>
          );
      }
  }
  render() {
    return (
      <div>
        {this.starRender()}
      </div>
    )
  }
}
export default StarRatingsInput;
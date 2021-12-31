import React from "react";
import StarRatings from 'react-star-ratings';
class RatingsBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderOverallRating=this.renderOverallRating.bind(this);
  }
  renderOverallRating () {
    if(this.props.ratings.avg !== undefined) {

      return (
        <>
        <h1>{this.props.ratings.avg}</h1>
          <StarRatings
        rating={Number(this.props.ratings.avg)}
        starDimension="15px"
        starSpacing="5px"
      />
        </>
      )
    }
  }
  render() {

    return (
      <>
        <div>Star Ratings</div>
        {this.renderOverallRating()}
        <div>{this.props.recommended}% of {this.props.ratingsCount} reviews recommend this product</div>
        <div>Rating Breakdown</div>
        <button name ="onereviews" value="showOne" onClick={this.props.click}>1:</button>
        <div>{this.props.ratings["1"]}%</div>
        <button name ="tworeviews" value="showTwo" onClick={this.props.click}>2:</button>
        <div>{this.props.ratings["2"]}%</div>
        <button name ="threereviews" value="showThree" onClick={this.props.click}>3:</button>
        <div>{this.props.ratings["3"]}%</div>
        <button name ="fourreviews" value="showFour" onClick={this.props.click}>4:</button>
        <div>{this.props.ratings["4"]}%</div>
        <button name ="fivereviews" value="showFive" onClick={this.props.click}>5:</button>
        <div>{this.props.ratings["5"]}%</div>
      </>
    );
  }
}

export default RatingsBreakdown;

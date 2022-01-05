import React from 'react';
import axios from 'axios';

class HelpfulnessButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      review_id: this.props.review_id,
      marked: false,
      helpfulness: this.props.helpfulness
    }
    this.renderButton = this.renderButton.bind(this);
    this.markHelpful = this.markHelpful.bind(this);
  }

  markHelpful() {
    let that = this;
    if (this.state.marked === false) {
      axios.put("/reviews/:reviewId/helpful", {review_id: that.props.review_id})
        .then(function(response) {
          //console.log('this worked:', response);
          that.setState({marked: true, helpfulness: that.state.helpfulness + 1})
          // that.props.getRevs();
        })
        .catch(function(error) {
          console.log('PUT Error:', error);
        })
    }
  }
  renderButton() {
    if (this.props !== undefined) {
      return (<div onClick={this.markHelpful} className="helpfulReview">Yes({this.state.helpfulness})</div>)
    }
  }
  render () {
    return (
      <>
        {this.renderButton()}

      </>
    )
  }
}
export default HelpfulnessButton;
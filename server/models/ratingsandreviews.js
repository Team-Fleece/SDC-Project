const axios = require('axios');
const config = require('./config.js');
// needs to be updated with imported config file so can submit requests with proper authorization

let getReviews = function (productId, callback) {
  let optionsURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews`;
  let optionsConfig = {
    headers: {
      'User-Agent': 'request',
      'Authorization': `${config.TOKEN}`
    },
    params: { 'product_id': productId}
  }
  axios.get(optionsURL, optionsConfig)
    .then (function(response) {
      callback(null, response.data);
    })
    .catch (function(error) {
      console.log('getReviews did not work:', error);
      callback(error);
    })
};

let getMetadata = function(productId, callback) {
  let optionsURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta`;
  let optionsConfig = {
    headers: {
      'User-Agent': 'request',
      'Authorization': `${config.TOKEN}`
    },
    params: { 'product_id': productId}
  }
  axios.get(optionsURL, optionsConfig)
    .then (function(response) {
      callback(null, response.data);
    })
    .catch (function(error) {
      console.log('getMetadata did not work:', error);
      callback(error);
    })
};

let createReview = function(review, callback) {
  let optionsURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews`;
  let optionsConfig = {
    headers: {
      'User-Agent': 'request',
      'Authorization': `${config.TOKEN}`
    },
    params: {
      'product_id': review.productId,
      'rating': review.rating,
      'summary': review.summary,
      'body': review.recommend,
      'name': review.name,
      'email': review.email,
      'photos': review.photos
      'characteristics': review.characteristics
    }
  }
  axios.post(optionsURL, optionsConfig)
  //note  that may need to reformat this post request such that there is a param between both options
    .then (function(response) {
      callback(null, response.data);
    })
    .catch (function(error) {
      console.log('createReview did not work:', error);
      callback(error);
    })
};

let markHelpful = function(reviewId, callback) {
  let optionsURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${reviewId}/helpful`;
  let optionsConfig = {
    headers: {
      'User-Agent': 'request',
      'Authorization': `${config.TOKEN}`
    };
  axios.put(optionsURL, optionsConfig)
    .then(function (response) {
      callback(null, response.data);
    })
    .catch(function (error) {
      console.log('markHelpful Error:', error);
      callback(error);
    });

};

let reportReview = function(reviewId, callback) {
  let optionsURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${reviewId}/report`;
  let optionsConfig = {
    headers: {
      'User-Agent': 'request',
      'Authorization': `${config.TOKEN}`
    };
  axios.put(optionsURL, optionsConfig)
    .then(function (response) {
      callback(null, response.data);
    })
    .catch(function (error) {
      console.log('reportReview Error:', error);
      callback(error);
    });

};

module.exports.getReviews = getReviews;
module.exports.getMetadata = getMetadata;
module.exports.createReview = createReview;
module.exports.markHelpful = markHelpful;
module.exports.reportReview = reportReview;

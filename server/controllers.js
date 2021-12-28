var express = require('express');
var router = express.Router();
var {getAllProducts, getSpecificProduct} = require('./models/models');

//PRODUCTS
router.get(`/products/:productId/styles`, (req, res) => {
  res.send('for all styles');
});


router.get(`/products/:productId/related`, (req, res) => {
  res.send('for related');
});

router.get('/products/:productId', (req, res) => {
  getSpecificProduct(req.params.productId, (err, product) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log('got specific product');
      res.send(product);
    }
  });
});

router.get('/products', (req, res) => {
  getAllProducts((err, products) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log('got products');
      res.send(products);
    }
  });
});

//REVIEWS
router.get('/reviews/meta', (req, res) => {
  res.send('Meta data');
});

router.get('/reviews', (req, res) => {
  res.send('Reviews for product');
});

router.post('/reviews', (req, res) => {
  res.send('add review');
});

router.put(`/reviews/:reviewId/helpful`, (req, res) => {
  res.send('Mark a review as helpful');
});

router.put(`/reviews/:reviewId/report`, (req, res) => {
  res.send('report review');
});

//Q&A
router.get(`/qa/questions/:questionId/answers`, (req, res) => {
  res.send('answers');
});

router.get('/qa/questions', (req, res) => {
  res.send('questions');
});

router.post(`/qa/questions/:questionId/answers`, (req, res) => {
  res.send('add answer')
});

router.post('/qa/questions', (req, res) => {
  res.send('add question')
});

router.put(`/qa/questions/:questionId/helpful`, (req, res) => {
  res.send('mark as helpful')
});

router.put(`/qa/questions/:questionId/report`, (req, res) => {
  res.send('report question');
});

router.put(`/qa/questions/:answerId/helpful`, (req, res) => {
  res.send('mark answer as helpful')
});

router.put(`/qa/questions/:answerId/report`, (req, res) => {
  res.send('report answer')
});

//CART
router.get(`/cart`, (req, res) => {
  res.send('get cart');
});

router.post(`/cart`, (req, res) => {
  res.send('add to cart');
});

//INTERACTIONS
router.get(`/interactions`, (req, res) => {
  res.send('log interaction');
});

module.exports = router;


// from client

const app = require('./index');

//PRODUCTS
app.get(`/products/:product_id/styles`, (req, res) => {
  res.send('for all styles');
});


app.get(`/products/:product_id/related`, (req, res) => {
  res.send('for related');
});

app.get('/products/:product_id', (req, res) => {
  res.send('for certian product')
});

app.get('/products', (req, res) => {
  res.send('get products');
});

//REVIEWS
app.get('/reviews/meta', (req, res) => {
  res.send('Meta data');
});

app.get('/reviews', (req, res) => {
  res.send('Reviews for product');
});

app.post('/reviews', (req, res) => {
  res.send('add review');
});

app.put(`/reviews/:review_id/helpful`, (req, res) => {
  res.send('Mark a review as helpful');
});

app.put(`/reviews/:review_id/report`, (req, res) => {
  res.send('report review');
});

//Q&A
app.get(`/qa/questions/:question_id/answers`, (req, res) => {
  res.send('answers');
});

app.get('/qa/questions', (req, res) => {
  res.send('questions');
});

app.post(`/qa/questions/:question_id/answers`, (req, res) => {
  res.send('add answer')
});

app.post('/qa/questions', (req, res) => {
  res.send('add question')
});

app.put(`/qa/questions/:question_id/helpful`, (req, res) => {
  res.send('mark as helpful')
});

app.put(`/qa/questions/:question_id/report`, (req, res) => {
  res.send('report question');
});

app.put(`/qa/questions/:answer_id/helpful`, (req, res) => {
  res.send('mark answer as helpful')
});

app.put(`/qa/questions/:answer_id/report`, (req, res) => {
  res.send('report answer')
});

//CART
app.get(`/cart`, (req, res) => {
  res.send('get cart');
});

app.post(`/cart`, (req, res) => {
  res.send('add to cart');
});

//INTERACTIONS
app.get(`/interactions`, (req, res) => {
  res.send('log interaction');
});
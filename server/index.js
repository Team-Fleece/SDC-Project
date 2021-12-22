/*Authors: */

//Dependencies
const express = require('express')
const axios = require('axios')
const PORT = 3000;

//Assembling app controller/listener
const app = express()
app.use(express.static('bundle')) //Add middleware to serve static react
app.use(express.json()); //Add middleware to interpret req/res as JS

app.listen(PORT, function (err) {
  if (err) console.log(err)
  console.log('Server listening on localhost:' + PORT)
})

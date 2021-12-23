//Dependencies
const express = require('express')

//Modules
const models = require('./models.js')


//Assembling app controller/listener
const app = express()
app.use(express.json()) //Add middleware to interpret req/res as JS
app.use(express.static('../bundle')) //Add middleware to serve static react


//Begin Defining Routes
app.get('/', (req, res) => {
  console.log('request recieved')
  //res.status(200).send("Hello World!")
  res.end()
})

module.exports = {app};
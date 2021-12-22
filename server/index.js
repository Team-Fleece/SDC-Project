/*Authors: */

//Dependencies
//const express = require('express')
//const axios = require('axios')
const PORT = 3000;

//Modules
const {app} = require('./controllers.js')
//console.log(app)
//Import Controllers

app.listen(PORT, function (err) {
  if (err) console.log(err)
  console.log('Server listening on localhost:' + PORT)
})


// console.log("huh")
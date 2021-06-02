const { Router } = require("express");
const dotenv = require('dotenv')
dotenv.config()
const { addDrink } = require('../database/Models.js')

const axios = require('axios');

const customRouter = Router();


//customRouter sends a post request which sends userInput to database;
customRouter.post('/', (req, res) => {
  const drink = req.body;
  console.log('THIS IS INSIDE CUSTOM ROUTER', drink)
  addDrink(drink)
  .then(() => {
    console.log('SAVED TO DB')
    res.sendStatus(201)
  })
  .catch((err) => {
    console.log('ERROR', err)
    res.sendStatus(500)
  }) 

})


module.exports = { customRouter };
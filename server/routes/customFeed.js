const { Router } = require("express");
const dotenv = require('dotenv')
dotenv.config()
const { Drink } = require('../database/Models.js')

const axios = require('axios');

const customRouter = Router();


//customRouter sends a post request which sends userInput to database;
customRouter.post('/', (req, res) => {
  const drink = req.body;
  console.log('THIS IS INSIDE CUSTOM ROUTER', drink)
})


module.exports = { customRouter };
const { Router } = require("express");
const dotenv = require('dotenv')
dotenv.config()

const axios = require('axios');

const feedRouter = Router();
// const { API_KEY } = require('../config.js')


feedRouter.get('/', (req, res) => {
  axios.get(`http://www.thecocktaildb.com/api/json/v2/${process.env.API_KEY}/randomselection.php`)
    .then(( { data }) => {
      res.status(200).send(data.drinks);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
})


module.exports = { feedRouter };
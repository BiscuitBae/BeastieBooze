const { Router } = require("express");
// const axios = require('axios');
const dotenv = require('dotenv')
dotenv.config()

import axios from 'axios'

const feedRouter = Router();
const { API_KEY } = require('../config.js')


feedRouter.get('/', (req, res) => {
  axios.get(`http://www.thecocktaildb.com/api/json/v2/${API_KEY}/randomselection.php`)
    .then(( { data }) => {
      // console.log(data)
      res.status(200).send(data.drinks);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
})


export default feedRouter
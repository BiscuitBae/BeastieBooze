const { Router } = require("express");
const dotenv = require('dotenv')
dotenv.config()

import axios from 'axios'

const searchRouter = Router();
const { API_KEY } = require('../config.js')


searchRouter.get('/', (req, res) => {
  console.log('we\'re in the server')
  const { searchParam, tag, query } = req.query;
  console.log(searchParam, tag, query)
  axios.get(`http://www.thecocktaildb.com/api/json/v1/1/${searchParam}.php?${tag}=${query}`)
    .then(({ data }) => {
      console.log(data)
      res.status(200).send(data.drinks);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
})


export default searchRouter
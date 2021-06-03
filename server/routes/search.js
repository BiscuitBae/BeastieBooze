const { Router } = require("express");
const dotenv = require('dotenv')
dotenv.config()

const axios = require('axios');

const searchRouter = Router();
const { API_KEY } = require('../config.js')


searchRouter.get('/', (req, res) => {
  const { searchParam, tag, query } = req.query;
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

module.exports = {searchRouter};
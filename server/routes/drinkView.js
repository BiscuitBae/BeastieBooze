const { Router } = require("express");
const dotenv = require('dotenv')
dotenv.config()

import axios from 'axios'

const drinkRouter = Router();
//Premium API key doesn't work for certain requests. 
const { API_KEY } = require('../config.js')


drinkRouter.get('/:drinkId', (req, res) => {
  const drinkId = req.params.drinkId
  axios.get(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
  .then(( { data }) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
})


export default drinkRouter
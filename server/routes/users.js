const { Router } = require("express");
const dotenv = require('dotenv');
const { getUser, createUser } = require('../database/helpers');
dotenv.config();

const axios = require('axios');

const usersRouter = Router();

usersRouter.post('/', (req, res) => {
  const { googleId, username } = req.body
  const existingUser = getUser(googleId);

  if(existingUser){
    console.log(existingUser)
    res.status(201).send(existingUser)
  }

});


module.exports = { usersRouter };
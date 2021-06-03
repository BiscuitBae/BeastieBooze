const { Router } = require("express");
const dotenv = require('dotenv');
const { getUser, createUser } = require('../database/helpers');
const { User } = require('../database/Models');

dotenv.config();

const axios = require('axios');

const usersRouter = Router();

usersRouter.get('/', (req, res) => {

});

usersRouter.post('/', (req, res) => {
  const { googleId, username } = req.body
  const existingUser = getUser(googleId);

  if(existingUser){
    console.log(existingUser)
    res.status(201).send(existingUser);
  } else if (!existingUser) {
    console.log('newUser')
    res.status(201).send(createUser(req.body));
  } else {
    console.log('not found')
    res.sendStatus(404);
  }
});


module.exports = { usersRouter };
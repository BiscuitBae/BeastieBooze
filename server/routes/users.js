const { Router } = require("express");
const dotenv = require('dotenv');
const { getUser, createUser } = require('../database/helpers');
const { User } = require('../database/Models');

dotenv.config();

const axios = require('axios');

const usersRouter = Router();


usersRouter.get('/', async (req, res) => {
  const { googleId, username } = req.query
  const existingUser = await getUser(googleId);
  

  if(existingUser.length){
    console.log(existingUser)
    res.status(201).send(existingUser);
  } else if (!existingUser.length) {
    console.log('newUser: ' )
    res.status(201).send(createUser(req.body));
  } else {
    console.log('not found')
    res.sendStatus(404);
  }
});


module.exports = { usersRouter };
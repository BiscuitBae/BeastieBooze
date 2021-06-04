const { Router } = require("express");
const { getUser, createUser, findAndUpdate } = require('../database/helpers');
const axios = require('axios');

const usersRouter = Router();

usersRouter.get('/', async (req, res) => {
  const { googleId, username } = req.query;
  const existingUser = await getUser(googleId);

  if (existingUser.length) {
    console.log('server: existing user ==> ', existingUser);
    res.status(201).send(existingUser[0]);
  } else if (!existingUser.length) {
    console.log('newUser: ', existingUser);
    createUser(req.query)
      .then(user => {
        res.status(200)
        .send(user);
      })
      .catch(err => {
        // console.log('error creating user', err);
        res.sendStatus(500);
      })
  } else {
    // console.log('not found');
    res.sendStatus(404);
  }
});

//Create a User Patch and a User Destroy route//
usersRouter.patch('/:id', (req, res) => {
  const { id, creations } = req.body
  findAndUpdate(id, creations)
  .then((user) => {
    console.log('PATCHED SUCCESSFULLY', user)
    res.sendStatus(201)
  })
  .catch(err => {
    console.error(err)
    res.sendStatus(500)
  })
})


module.exports = { usersRouter };
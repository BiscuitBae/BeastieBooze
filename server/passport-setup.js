require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { CLIENT_ID, CLIENT_SECRET } = require('./config')

// this gives our user a unique identifier to store to the cookie
passport.serializeUser((user, done) => {
  // call done method once we get user from the db
  done(null, user.id);
});

// takes a session's cookie data and decrypts it to find the matching user
passport.deserializeUser((id, done) => {
  // find user by id (THIS HELPER NEEDS TO BE DEFINED IN DB HELPERS)
  // call done once we've found the user
  getUser(id)
    .then(currentUser => {
      done(null, currentUser[0]);
    })
});

// use google strategy that interacts with passport
passport.use(new GoogleStrategy({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: "/googleRedirect"
  },
  // passport callback function
  (accessToken, refreshToken, profile, done) => {

    // destructure the info google sends back to us as 'profile', pulling out whatever we need
    // renaming their variables to whatever we want to match our model
    // they give access to id, displayName, given_name(first name), family_name(last name), picture, email
    const {
      id: googleId, // this will be a unique value we can use to check if they are already stored in our db
      displayName: username,
    } = profile;

    // create a new user object
    const user = { googleId, username };

    // use the profile info (mainly the google id) to check if the user is registered in your db

    // we need to create getUser and createUser helper functions for the db to use this
    getUser(googleId)
      .then(currentUser => {
        currentUser;

        // if the response includes a user obj from our db -> this may need to change depending on the response we expect from our db,
        // this ex. was using SQL
        if (currentUser.length) {
          done(null, currentUser[0]);
        } else {
          // if not create a new user in the db
          createUser(user);
          getUser(googleId)
            .then(newUser => {
              newUser;
              done(null, newUser[0]);
            })
            .catch(err => console.log('error creating new user', err));
        }
      })
  }
));
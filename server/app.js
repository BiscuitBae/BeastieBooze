const express = require('express');
const path = require('path');
// const passport = require('passport');
// const cookieSession = require('cookie-session');
const router = require('./routes/index.js')
// require('./passport-setup');
const { COOKIEKEY } = require('./config');
const { User, Drink } = require('./database/Models');

const PORT = 8080;
const DIST_DIR = path.resolve(__dirname, '..', 'client/dist');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(DIST_DIR))

// app.use(cookieSession({
//   name: 'beastie-session',
//   maxAge: 24 * 60 * 60 * 1000, // this will make the cookie last for one day (measured in ms)
//   // keys are how we'd like to encrypy the googleId bfore sending it back to the user
//   // i just used a random string of letters
//   keys: [COOKIEKEY]
// }));

// we might want to move this middleware to another file
// add this middleware to routes that need user authentification
// const isLoggedIn = (req, res, next) => {
//   if (req.user) {
//     next()
//   } else {
//     res.sendStatus(401);
//   }
// }

// app.use(passport.initialize());
// app.use(passport.session());

// example routes for good and bad login attempts
// app.get('/', (req, res) => res.send('You are not logged in.'));
// app.get('/failed', (req, res) => res.send('You failed to log in.'))
// app.get('/good', isLoggedIn, (req, res) => res.send(`Welcome ${req.user.displayName}!`))

// // callback takes the strategy name (google) and the scope we are trying to retrieve from google (the profile info and email)
// app.get('/loginAttempt',
//   passport.authenticate('google', { scope: ['profile', 'email'] }));

// // when a user is redirected back from google it follows this route
// app.get('/googleRedirect',
//   // this line needs to redirect to whatever route we want a failed login to direct to
//   passport.authenticate('google', { failureRedirect: '/failed' }),
//   function(req, res) {
//     // Successful authentication, redirect to whatever we want
//     res.redirect('/good');
//   });

// app.get('/logout', (req, res) => {
//   req.session = null;
//   req.logout();
//   res.redirect('/')
// })
router(app);
app.listen(PORT, () => {
  console.log(`Server is listening at: http://localhost:${PORT}`);
});
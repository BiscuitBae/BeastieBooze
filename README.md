# BeastieBooze

# Initialization

Webpack:
 1) BeastieBooze's react components are bundled/compiled using webpack and babel.
 2) The configuration for webpack can be found at webpack.config.js while the babel presets are located at .babelrc.
 3) The command to run webpack is <npm run build:dev>. This command must be run throughout dev to contiguously package
    any changes that will render on the client side.

# Client-Side

React Components:
Using React Router to render all views on client side through main App component.
Eh.. We'll add more to this as we flesh it out

BoozeContext:

Client-Side Helper Functions:
Client side helper functions are contained within the /client/utils folder:
 1) ParseIng: ParseIng is imported to the DrinkView component to enable matching ingredients to measurements in drink instructions
 2) useHover: useHover is a custom hook managing state of whether or not an element is hovered over. It is imported to the ImgWrapper
    to enable text overlay over thumbnail images in the feed view and tinting of thumbnails on mouseOver.

Google Passport & Oauth:
Using Google's Oauth (Google+ API) and Passport for authorization.
 1) User visiting our website will login using their Google credentials. Google then informs the user that by signing in they are giving permission to pass their data back to us.
 2) Once logged in, Google redirects use back to our app alongside an authorization code.
 3) With this authorization code we can request their info from google.
 4) With that user info we can either save the user to our database, or render properly based upon the data they've previously saved.

# Server Side

Routes:
Server Side Routes are contained within /server/routes folder:
 1) server routes are directed to /server/routes/index.js to export to router within /server/app.js
 2) feed.js holds feedRouter that handles routes for the Feed component i.e. loading main feed of drinks using cocktaildb Api
 3) drinkView.js holds drinkRouter that handles routes for drinkView component i.e. taking id param and serving correct cocktail


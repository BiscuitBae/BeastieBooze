# BeastieBooze

Webpack:
BeastieBooze's react components are bundled/compiled using webpack and babel. The configuration for webpack can be found at webpack.config.js while the babel presets are located at .babelrc. The command to run webpack is <npm run build:dev>. This command must be run throughout dev to contiguously package any changes that will render on the client side.

React Components:
  Using React Router to render all views on client side through main App component.
Eh.. We'll add more to this as we flesh it out

Client-Side Helper Functions:
Client side helper functions can be found within the /client/utils folder:
ParseIng: ParseIng is imported to the DrinkView component to enable matching ingredients to measurements in drink instructions
useHover: useHover is a custom hook managing state of whether or not an element is hovered over. It is imported to the ImgWrapper
  to enable text overlay over thumbnail images in the feed view and tinting of thumbnails on mouseOver.

Google Passport & Oauth:
Using Google's Oauth (Google+ API) and Passport for authorization.
 1) User visiting our website will login using their Google credentials. Google then informs the user that by signing in they are giving permission to pass their data back to us.
 2) Once logged in, Google redirects use back to our app alongside an authorization code.
 3) With this authorization code we can request their info from google.
 4) With that user info we can either save the user to our database, or render properly based upon the data they've previously saved.

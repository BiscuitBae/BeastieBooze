# BeastieBooze

# Initialization

Webpack:
 1) BeastieBooze's react components are bundled/compiled using webpack and babel.
 2) The configuration for webpack can be found at webpack.config.js while the babel presets are located at .babelrc.
 3) The command to run webpack is <npm run build:dev>. This command must be run throughout dev to contiguously package
    any changes that will render on the client side.

# Client-Side

Index.jsx:
 1) All client-side React Routes are served using React Router
 2) The ReactDOM render for the APP is located at client\src\index.jsx
 3)Within this file the router utilized is Browser Router and that, in turn is 
   wrapped within the UserContext Provider and BoozeContext Provider which
   handle much of the App's state through the createContext property of 
   React.


Created Contexts:
 1) Booze Context: holds state and makes axios calls related to drinks within 
    the App. Exports functions used throughout the App.
 2) User Context: holds state and makes axios calls related to user informatioN 
    within the App. Exports functions used throughout the App.

React Components:
 1) Our components are split into two folders within our client/src folder:
    components and pages.
 2) The pages folder holds views or 'pages' that our App contains where the
    components holds components that are elements that are within each 'page'
 3) Inside our components folder there is the App.jsx file which serves as the 
    hub component of our app which is imported in our client\src\index.jsx file
 4) App.jsx includes all of the routes to 'pages' within the App.

Pages:
 1) Feed.jsx serves as the home 'page' of the app. UserContext is imported
    in to give access to whether or not a visitor is logged in and their
    information. BoozeContext is imported to populate the feed using the 
    state of drinksFeed which holds drinks pulled from the API. The drinks
    are passed to the component <DrinkTile> as props. Also the Feed is 
    populated with non-alcoholic drinks if the visitor is underage.
 2) CustomFeed.jsx works similarly to Feed.jsx except is renders drinks from
    our database that are user creations and sends those to <CustomDrinkTile>
    as props. Our custom drinks have images parsed in through the helper 
    function imageUrlParser found at client\utils\imageUrls.js
 3) Search.jsx we use react-hook-form to power our search feature. We use 
    our searchDrinks function declared in BoozeContext and use register 
    and handleSubmit from useForm to make a search that returns results 
    directly under our search bar from our <SearchFeed> component.
 4) DrinkView.jsx renders the view that details the information from individual
    drinks fetched by the API. It includes an image of the drink, its description
    whether or not it is alcoholic, the glass it is beset enjoyed in, and 
    instructions for concocting the drink. To render the ingredient information
    from the API we have implemented a helper function client\utils\parseIng.js.
    Users are able to favorite and unfavorite a drink and this is made possible
    through conditions rendering of functional components userButtons and 
    removeButton. This is dependent on the state of isLoggedIn coming from
    userContext.
 5) CustomDrinkView.jsx is the database equivalent to DrinkView it has much
    of the same features except it receives drink information in different 
    formats as it is passed props of drink information using useLocation from
    react-router-dom instead of a call to the database each time it is rendered.
    When navigated to from the CustomFeed 'page' it receives information from the
    Drink Schema. The Drink Schema has properties of name, instructions, ingredients,
    alcoholic, and createdBy. When CustomDrinkView is navigated to from the Profile
    'page' the props passed to it are from the creations array within the User Schema. 
    Here the properties are drinkName, instructions, alcoholic, and ingredients. Due
    to this discrepancy in naming customDrinkView has conditional logic so that is 
    able to handle information from both sources. This can be streamlined and reconfigured
    to be more efficient. 
 6) Create.jsx powers the Submit 'page' of the App which enables users to submit drinks.
    Like our search feature this component uses react-hook-form to power its submission.
    We also utilize yup for form validation. Each user submission is sent to the database
    through the makeADrink function from BoozeContext and the User Schema is updated with
    this user's new creation through the addCreation function from UserContext.  
 7) Profile.jsx is the 'page' that stores our users creations and favorites. Their favorites
    are stored in state and are populated when the user logs in and is added to each time 
    they hit the favorite button on the CustomDrinkView and DrinkView pages. Their creations
    are set from their creations array in their User Schema and comes from userInfo from 
    UserContext. The components which hold this information are UserFavorites and UserCreations.
    When clicking on the name of a favorite or creation the user is navigated to that drinks 
    individual view. 





Client-Side Helper Functions:
Client side helper functions are contained within the /client/utils folder:
 1) ParseIng: ParseIng is imported to the DrinkView component to enable matching ingredients to measurements in drink instructions
 2) useHover: useHover is a custom hook managing state of whether or not an element is hovered over. It is imported to the ImgWrapper
    to enable text overlay over thumbnail images in the feed view and tinting of thumbnails on mouseOver.

Google Oauth & react-google-login:
Using Google's Oauth (Google+ API) and react-google-login for authorization.
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


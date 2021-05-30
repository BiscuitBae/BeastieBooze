// import ReactDOM
// where we render App to the root or whatever we're calling it

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Heading = () => {
//   return (
//     <div>
//       <h1>Beaverages for the Bold</h1>
//     </div>
//   )
// }

ReactDOM.render(
<Router>
  <App />
</Router>
  , document.getElementById('app'))
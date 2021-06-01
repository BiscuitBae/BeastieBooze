// import ReactDOM
// where we render App to the root or whatever we're calling it

import React from 'react';
import ReactDOM from 'react-dom';

// Can swap Hash Router for Browser Router

import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App';
// import 'bootstrap/dist/css/bootstrap.min.css';

import {BoozeContextProvider} from './boozeContext'


ReactDOM.render(
  <BoozeContextProvider>
    <Router>
      <App />
    </Router>
  </BoozeContextProvider>,
  document.getElementById('app'));
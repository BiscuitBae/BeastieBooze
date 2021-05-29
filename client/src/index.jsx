// import ReactDOM
// where we render App to the root or whatever we're calling it

import React from 'react';
import ReactDOM from 'react-dom';
// import App from './component/App.jsx';

const Heading = () => {
  return (
    <div>
      <h1>Beaverages for the Bold</h1>
    </div>
  )
}

ReactDOM.render(<Heading />, document.getElementById('app'))
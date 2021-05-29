// table of contents
// render all of our different views
// view switcher - main, single drink, create, profile, login/signup buttons, search bar

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/css/bootstrap-theme.css";



import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Create from './Create'
import Feed from './Feed'

const App = () => {

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Feed />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
      </Switch>
    </div> 
  )

}

export default App
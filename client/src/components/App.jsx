// table of contents
// render all of our different views
// view switcher - main, single drink, create, profile, login/signup buttons, search bar

import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Create from './Create'
import Feed from './Feed'

const App = () => {

  return (
    <div>
      <nav>
        <Link to="/">Feed</Link>
        <Link to="/create">Add a drink</Link>
      </nav>
      <Switch>
        <Route exact route='/'>
          <Feed />
        </Route>
        <Route exact route="/create">
          <Create />
        </Route>
      </Switch>
    </div> 
  )

}

export default App
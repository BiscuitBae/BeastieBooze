// table of contents
// render all of our different views
// view switcher - main, single drink, create, profile, login/signup buttons, search bar


import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Create from '../pages/Create'
import Feed from '../pages/Feed'
import DrinkView from '../pages/DrinkView'
import Login from '../pages/Login'
import Search from '../pages/Search'
import CustomFeed from '../pages/CustomFeed'
import CustomDrinkView from '../pages/CustomDrinkView'

const App = () => {


  //* using react router to conditionally render views. We'll add more as we go
  return (
    <div className="app-body">
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Feed />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route path='/drink/:drinkId'>  {/* // takes a param and dynamically renders a drinkView */}
           <DrinkView />                {/* according to the drinkId passed in from the DrinkTile component */}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/custom">
          <CustomFeed />
        </Route>
        <Route path="/custom/drink">
          <CustomDrinkView />
        </Route>
      </Switch>
    </div>
  )

}

export default App
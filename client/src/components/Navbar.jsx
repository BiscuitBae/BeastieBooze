// navbar will contain logo on the far left, signup/login or logout/username(profile view) buttons on the far right
// buttons to switch to either custom drinks page or the main feed

import React, { useState } from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import bootstrap from 'bootstrap' 

const Navbar = () => {

  return (
    <nav className="navbar navbar-light">
       <a className="navbar-brand">Navbar</a>
      <Link to="/">Feed</Link>
      <Link to="/create">Add a drink</Link>
    </nav>

//   <nav className="navbar navbar-light bg-light justify-content-between">
//   <a className="navbar-brand">Navbar</a>
//   <form className="form-inline">
//     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
//     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//   </form>
// </nav>
  )
}

export default Navbar
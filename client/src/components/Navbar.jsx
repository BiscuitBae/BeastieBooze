// navbar will contain logo on the far left, signup/login or logout/username(profile view) buttons on the far right
// buttons to switch to either custom drinks page or the main feed

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from '../pages/Login.jsx';

const Navbar = () => {
  //* links to endpoints that will be handled by Routes in App component

//state to hold collapsing navbar
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => {
  console.log('collapse')
  return setIsNavCollapsed(!isNavCollapsed)
}

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

      <Link to="/" className="navbar-brand">
        <img src="images/beastieBoozeLogo.png"></img>
      </Link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarTogglerDemo02" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link to="/search" className="nav-link">Search</Link>
          </li>
          <li className="nav-item">
            <Link to="/custom" className="nav-link">Custom</Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link">Submit</Link>
          </li>
        </ul>
        <li className="nav-item login-nav">
          <div className="nav-link btn-nav" style={{padding: '10px 0px 0px 0px'}}>
            <Login />
          </div>
        </li>
      </div>
    </nav>
  )
}

export default Navbar
// navbar will contain logo on the far left, signup/login or logout/username(profile view) buttons on the far right
// buttons to switch to either custom drinks page or the main feed

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  //* links to endpoints that will be handled by Routes in App component
  return (

  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to="/" className="navbar-brand"><img src="images/beastieBoozeLogo.png"></img></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="navbar collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/custom" className="nav-link">Custom</Link>
      </li>
      <li className="nav-item">
        <Link to="/search" className="nav-link">Search</Link>
      </li>
      <li className="nav-item">
        <Link to="/create" className="nav-link">Submit</Link>
      </li>
      <li className="nav-item">
      <Link to="/login" className="nav-link">Login</Link>
      </li>
    </ul>
  </div>
</nav>

  )
}

export default Navbar
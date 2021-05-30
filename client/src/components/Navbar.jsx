// navbar will contain logo on the far left, signup/login or logout/username(profile view) buttons on the far right
// buttons to switch to either custom drinks page or the main feed

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  //* links to endpoints that will be handled by Routes in App component
  return (
 
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to="/" className="navbar-brand">Beastie Booze</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to="/" className="nav-link">Feed</Link>
      </li>
      <li className="nav-item">
        <Link to="/create" className="nav-link">Add a drink</Link>
      </li>
      <li className="nav-item">
      <Link to="/login" className="nav-link">Login</Link>
      </li>
      <li className="nav-item">
      <Link to="/register" className="nav-link">Register</Link>
      </li>
    </ul>
  </div>
</nav>



    //* this is a navbar template using bootstrap-react-router
    // <Navbar bg="light" expand="lg">
    //   <LinkContainer to="/">
    //     <Navbar.Brand>React-Bootstrap</Navbar.Brand>
    //   </LinkContainer>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="mr-auto">
    //       <LinkContainer to="/">
    //         <Nav.Link>Home</Nav.Link>
    //       </LinkContainer>
    //       <LinkContainer to="/create">
    //         <Nav.Link>Create A Drink</Nav.Link>
    //       </LinkContainer>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>


    //* this is a bootstrap navbar template 
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
// navbar will contain logo on the far left, signup/login or logout/username(profile view) buttons on the far right
// buttons to switch to either custom drinks page or the main feed

// import React, { useState } from 'react'
// import { Link, Switch, Route } from 'react-router-dom'

// import bootstrap from 'bootstrap' 

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/css/bootstrap-theme.css";
import React from "react";
// import Navbar from "react-bootstrap/lib/Navbar";
// import Nav from "react-bootstrap/lib/Nav";
// import NavItem from "react-bootstrap/lib/NavItem";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Navbar = () => {

  return (
    <nav>
      <button>
        <Link to="/">Feed</Link>
      </button>
      <button>
        <Link to="/create">Add a drink</Link>
      </button>
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
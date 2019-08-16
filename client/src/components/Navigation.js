import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const Navigation = props =>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Nonogram Ninja</Navbar.Brand>
    <Nav className="navlinks">
      <Nav.Link href="home">Home</Nav.Link>
      <Nav.Link href="nonograms/new">New Nonogram</Nav.Link>
      <Nav.Link href="nonograms">Solve a Nonogram</Nav.Link>
    </Nav>
  </Navbar>

export default Navigation;

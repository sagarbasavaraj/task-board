import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap/lib';
import { Link } from 'react-router-dom';

const Header = () => (
  <Navbar inverse staticTop>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Taskboard</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          Sign in
        </NavItem>
        <NavItem eventKey={2} href="#">
          Sign up
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;

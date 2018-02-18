import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Navbar, NavItem, Nav } from 'react-bootstrap/lib';
import { Link } from 'react-router-dom';

const Header = ({ push }) => (
  <header>
    <Navbar inverse staticTop>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Taskboard</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} onClick={() => push('/login/signIn')}>
            Sign in
          </NavItem>
          <NavItem eventKey={2} onClick={() => push('/login/signUp')}>
            Sign up
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default connect(null, { push })(Header);

import React, { PureComponent } from 'react';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Navbar, NavItem, Nav } from 'react-bootstrap/lib';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { Span } from '../common';
import UserInfo from './user-info';

import './header.css';

class Header extends PureComponent {
  static propTypes = {
    user: object,
    dispatch: func
  };

  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
  }

  navigate(eventKey, event) {
    const { dispatch } = this.props;
    if (eventKey === 1) {
      dispatch(push('/login'));
    } else if (eventKey === 2) {
      dispatch(push('/join'));
    }
  }

  render() {
    const { user } = this.props;
    return (
      <header>
        <Navbar inverse staticTop onSelect={this.navigate}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to={isEmpty(user) ? '/' : '/taskboard'}>
                <Span msg="brand" />
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
          {isEmpty(user) ? (
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1} key="signIn">
                  <Span msg="nav.signInText" />
                </NavItem>,
                <NavItem eventKey={2} key="sigUp">
                  <Span msg="nav.signUp" />
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          ) : (
            <UserInfo user={user} />
          )}
        </Navbar>
      </header>
    );
  }
}

export default connect(state => ({
  user: state.login.user
}))(Header);

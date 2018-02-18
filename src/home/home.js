import React from 'react';

import './home.css';
import LoginForm from '../login/login';

import { Grid, Row, Col, Jumbotron } from 'react-bootstrap/lib';

const Home = () => (
  <Grid bsClass="container l-home">
    <Row>
      <Col xs={12}>
        <Jumbotron>
          <Row>
            <Col xs={6}>
              <h1>Welcome to Taskboard</h1>
              <p>Create and Mangae your tasks.</p>
            </Col>
            <Col xs={6}>
              <LoginForm showSignUp />
            </Col>
          </Row>
        </Jumbotron>
      </Col>
    </Row>
  </Grid>
);

export default Home;

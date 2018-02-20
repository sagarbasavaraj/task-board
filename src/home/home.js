import React from 'react';

import './home.css';
import SignUp from '../login/sign-up';

import { Grid, Row, Col, Jumbotron } from 'react-bootstrap/lib';

const Home = () => (
  <Grid bsClass="container l-home">
    <Row>
      <Col xs={12}>
        <Jumbotron>
          <Row>
            <Col md={7}>
              <h1>Welcome to Taskboard</h1>
              <p>Create and Mangae your tasks.</p>
            </Col>
            <Col sm={8} md={5}>
              <SignUp />
            </Col>
          </Row>
        </Jumbotron>
      </Col>
    </Row>
  </Grid>
);

export default Home;

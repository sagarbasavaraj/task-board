import React from 'react';
import { Header, Paragraph } from '../common';

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
              <Header msg="home:title" />
              <Paragraph msg="home:subtitle" />
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

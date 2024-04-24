import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Row id="landing-page" fluid="true">
    <Image src="images/background.png" id="background" width="cover" />
    <Col xs={8} className="text-center position-absolute top-50 start-50 translate-middle" id="body-text">
      <Row className="align-content-center justify-content-center">
        <h1><strong>Welcome to Kalo Stems!</strong></h1>
        <h2 id="motto">&quot;Cultivate Your Future, Stem Your Network with Companies!&quot;</h2>
      </Row>
    </Col>
  </Row>
);

export default Landing;

import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Row fluid>
    <Image src="images/background.png" id="background" width="cover" />
    <Col xs={8} className="text-center position-absolute top-50 start-50 translate-middle" id="body-text">
      <Row className="align-content-center justify-content-center">
        <h1><strong>Welcome to Kalo Stems!</strong></h1>
        <h2 id="motto">&quot;Cultivate Your Future, Stem Your Network with Companies!&quot;</h2>
        {/* eslint-disable-next-line max-len */}
        <Col xs={4}>
          <Image src="images/addCompanyProfilePage.png" />
        </Col>
        <Col xs={4}>
          <Image src="images/listJobsPage.png" />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default Landing;

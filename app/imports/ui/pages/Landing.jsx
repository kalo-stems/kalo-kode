import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Row id="landing-page" fluid="true">
    <Image src="images/background.png" id="background" width="cover" />
    <Col xs={8} className="text-center position-absolute top-50 start-50 translate-middle" id="body-text">
      <Row className="align-content-center justify-content-center" id="topHeader">
        <h1><strong>Welcome to Kalo Stems!</strong></h1>
        <h2 id="motto">&quot;Cultivate Your Future, Stem Your Network with Companies.&quot;</h2>
      </Row>
      <br />
      <br />
      <Row>
        <Col>
          <Image id="sample-image-1" src="images/addCompanyProfile.png" />
          <br />
          <br />
          <h5>Add your company&apos;s profile to our application for students to browse.</h5>
        </Col>
        <Col>
          <Image id="sample-image-2" src="images/listJobs.png" />
          <br />
          <br />
          <h5>Students may browse all job listings posted by the companies.</h5>
        </Col>
        <Col>
          <Image id="sample-image-3" src="images/listCompanyProfile.png" />
          <br />
          <br />
          <h5>Students may also browse a complete list of all of the companies in our database!</h5>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default Landing;

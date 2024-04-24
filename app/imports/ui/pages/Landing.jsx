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
      </Row>
      <Row>
        <Col>
          <Image id="sample-image-1" src="images/addCompanyProfilePage.png" />
          <h6>Our Add Company Profile Page allows for you to add your companies profile to our application for students to browse.</h6>
        </Col>
        <Col>
          <Image id="sample-image-2" src="images/listJobsPage.png" />
          <h6>Our List Jobs Pages allows for students to browse all job listings posted by the companies.</h6>
        </Col>
        <Col>
          <Image id="sample-image-3" src="images/listCompanyPage.png" />
          <h6>Our List Company Page allows for students to browse a complete list of all of the companies in our database.</h6>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default Landing;

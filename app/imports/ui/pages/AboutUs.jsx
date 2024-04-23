import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';

/* A simple static component to render some text for the about us page. */
const AboutUs = () => (
  <Row id="aboutus-page" fluid>
    <Image src="images/background.png" id="background" width="cover" />
    <Col xs={8} className="text-center position-absolute top-50 start-50 translate-middle" id="body-text">
      <Row className="align-content-center justify-content-center">
        <h1><strong>Welcome to Kalo Stems!</strong></h1>
        <h2 id="motto">&quot;Cultivate Your Future, Stem Your Network with Companies!&quot;</h2>
        {/* eslint-disable-next-line max-len */}
        <h4>Our platform, Kalo Stems, will allow UH students to connect with career opportunities that are tailored to their interests and skills. Students will be able to specify their background and aspirations, allowing companies to filter and match students who are best fit for their opportunity. KaloStems bridges the gap between academia and industry, allowing students long-term professional success.
        </h4>
        <h1> </h1>
        {/* eslint-disable-next-line max-len */}
        <h4>Kalo Stems is based upon meteor-application-template-react and meteor-example-form-react. Please use the videos and documentation at those sites to better acquaint yourself with the basic application design and form processing in Kalo-Stems.
        </h4>
      </Row>
    </Col>
    <Row>
      <Col>
        <h1>The Creators</h1>
      </Col>
    </Row>
    <Row>Natalie Dang</Row>
    <Row>Emily Hsu</Row>
    <Row>Samantha Kocher</Row>
    <Row>Roma Malasarte</Row>
    <Row>Rina Ogino</Row>
    <Row>Jaira Pader</Row>
  </Row>
);
export default AboutUs;

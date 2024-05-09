import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-light">
    <Container>
      <Row className="text-center">
        <Col>
          <Row>
            The Creators
            <br />
            Emily Hsu, Samantha Kocher, Roma Malasarte,
            <br />
            Rina Ogino, Jaira Pader, Natalie Dang
          </Row>
          <br />
        </Col>
        <Col>
          <Row>
            Department of Information and Computer Sciences
            <br />
            University of Hawaii
            <br />
            Honolulu, HI 96822
          </Row>
        </Col>
        <Col>
          <Row>
            <a style={{ color: 'white' }} href="https://ics-software-engineering.github.io/meteor-application-template-react/">Template Home Page</a>
            <br />
            <a style={{ color: 'white' }} href="https://kalo-stems.github.io/">https://kalo-stems.github.io/</a>
            <br />
            <a style={{ color: 'white' }} href="https://docs.google.com/forms/d/e/1FAIpQLSe2SBh4m5ZspDTEs6nUZX3oFsPsw_8W-QFEuCeRV7GaNbes3g/viewform?usp=pp_url">Feedback Form</a>
          </Row>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;

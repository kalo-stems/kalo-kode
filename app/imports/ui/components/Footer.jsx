import React from 'react';
import { Col, Container } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-light">
    <Container>
      <Col className="text-center">
        Natalie Dang, Emily Hsu, Samantha Kocher, Roma Malasarte, Rina Ogino, Jaira Pader
        <br />
        ndang562@hawaii.edu, ehsu@hawaii.edu, kochers@hawaii.edu, romaamor@hawaii.edu, rin4@hawaii.edu, jairabp@hawaii.edu
        <br />
        <br />
        Department of Information and Computer Sciences
        {' '}
        <br />
        University of Hawaii
        <br />
        Honolulu, HI 96822
        {' '}
        <br />
        <br />
        <a style={{ color: 'white' }} href="https://ics-software-engineering.github.io/meteor-application-template-react/">Template Home Page</a>
        <br />
        <a style={{ color: 'white' }} href="https://kalo-stems.github.io/">https://kalo-stems.github.io/</a>
        <br />
        <br />
        <a style={{ color: 'white' }} href="https://docs.google.com/forms/d/e/1FAIpQLSe2SBh4m5ZspDTEs6nUZX3oFsPsw_8W-QFEuCeRV7GaNbes3g/viewform?usp=pp_url">Feedback Form</a>
      </Col>
    </Container>
  </footer>
);

export default Footer;

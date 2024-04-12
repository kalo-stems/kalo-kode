import React from 'react';
import { Col, Container } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-light">
    <Container>
      <Col className="text-center">
        Natalie Dang, Emily Hsu, Samantha Kocher, Roma Malasarte, Rina Ogino, Jaira Pader
        <br />
        Department of Information and Computer Sciences
        {' '}
        <br />
        University of Hawaii
        <br />
        ndang562@hawaii.edu, ehsu@hawaii.edu, kochers@hawaii.edu, romaamor@hawaii.edu, rin4@hawaii.edu, jairabp@hawaii.edu
        {' '}
        <br />
        <a style={{ color: 'green' }} href="https://kalo-stems.github.io/">https://kalo-stems.github.io/</a>
      </Col>
    </Container>
  </footer>
);

export default Footer;

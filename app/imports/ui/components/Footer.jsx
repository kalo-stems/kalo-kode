import React from 'react';
import { Col, Container } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-light">
    <Container>
      <Col className="text-center">
        Kalo Stems
        {' '}
        <br />
        University of Hawaii
        <br />
        Honolulu, HI 96822
        {' '}
        <br />
        <a style={{ color: 'green' }} href="https://kalo-stems.github.io/">https://kalo-stems.github.io/</a>
      </Col>
    </Container>
  </footer>
);

export default Footer;

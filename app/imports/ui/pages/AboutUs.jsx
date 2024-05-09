import React from 'react';
import { Image, Col, Row, Container } from 'react-bootstrap';

/* A simple static component to render some text for the about us page. */
const AboutUs = () => (
  <Container className="text-center" id="landing-page" fluid="true">
    <br />
    <Row>
      <h1><strong> Welcome to Kalo Stems! </strong></h1>
      <h2 id="motto">&quot;Cultivate Your Future, Stem Your Network with Companies!&quot;</h2>
      {/* eslint-disable-next-line max-len */}
      <h4>Our platform, Kalo Stems, will allow UH students to connect with career opportunities that are tailored to their interests and skills. Students will be able to specify their background and aspirations, allowing companies to filter
        and match students who are best fit for their opportunity. Kalo Stems bridges the gap between academia and industry, allowing students long-term professional success.
      </h4>
    </Row>
    <br />
    <br />
    <Row />
    <Row><h1><strong> The Creators </strong></h1></Row>
    <Row>
      <Col>
        <Image id="EmilyHsu" src="images/EmilyHsu.png" width="300" />
        <h3>Emily Hsu</h3>
        <h4>ehsu@hawaii.edu</h4>
      </Col>
      <Col>
        <Image id="SamanthaKocher" src="images/SamanthaKocher.jpg" width="300" />
        <h3>Samantha Kocher</h3>
        <h4>kochers@hawaii.edu</h4>
      </Col>
      <Col>
        <Image id="RomaMalasarte" src="images/RomaMalasarte.jpg" width="300" />
        <h3>Roma Malasarte</h3>
        <h4>romaamor@hawaii.edu</h4>
      </Col>
    </Row>
    <br />
    <br />
    <Row>
      <Col>
        <Image id="RinaOgino" src="images/RinaOgino.png" width="300" />
        <h3>Rina Ogino</h3>
        <h4>rin4@hawaii.edu</h4>
      </Col>
      <Col>
        <Image id="JairaPader" src="images/JairaPader.jpg" width="300" />
        <h3>Jaira Pader</h3>
        <h4>jairabp@hawaii.edu</h4>
      </Col>
      <Col>
        <Image id="NatalieDang" src="images/NatalieDang.jpeg" width="300" />
        <h3>Natalie Dang</h3>
        <h4>ndang562@hawaii.edu</h4>
      </Col>
    </Row>
    <br />
    <br />
    <Row>
      {/* eslint-disable-next-line max-len */}
      <h6>Kalo Stems is based upon meteor-application-template-react and meteor-example-form-react. Please use the videos and documentation at those sites to better acquaint yourself with the basic application design and form processing in
        Kalo Stems.
      </h6>
    </Row>
    <br />
  </Container>
);
export default AboutUs;

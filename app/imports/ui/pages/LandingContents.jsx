import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <div>
    <Row id="landing-page" fluid="true">
      <Col>
        <Row>
          {/* <Image src="images/background.png" id="background" width="cover" /> */}
          <Row className="text-center" id="topHeader">
            <h1><strong>Welcome to Kalo Stems!</strong></h1>
            <h2 id="motto">&quot;Cultivate Your Future, Stem Your Network with Companies.&quot;</h2>
          </Row>
          {/* First Section */}
          <Row className="m-3 align-items-center">
            <Col xs={5} className="text-center">
              <Image className="mx-auto d-block" id="sample-image-1" src="images/addCompanyProfile.png" />
            </Col>
            <Col xs={5} className="text-left">
              <h5>
                {/* eslint-disable-next-line max-len */}
                Welcome to our company profile page where we invite you to showcase your company&apos;s profile on Kalo Stems, providing University of Hawaii at Manoa students with exciting opportunities to explore potential future positions and contribute to the next generation of talent.
              </h5>
            </Col>
          </Row>
          {/* Second Section */}
          <Row className="m-3 align-items-center">
            <Col xs={5} className="text-center">
              <Image className="mx-auto d-block" id="sample-image-2" src="images/listJobs.png" />
            </Col>
            <Col xs={5} className="text-left">
              <h5>
                {/* eslint-disable-next-line max-len */}
                Welcome to our job listings page, where you can discover a diverse range of career opportunities posted by companies within out system. This platform is designed to empower students to explore potential career paths, understand job expectations and requirements, and access a curated selection of job opportunities.
              </h5>
            </Col>
          </Row>
          {/* Third Section */}
          <Row className="m-3 align-items-center">
            <Col xs={5} className="text-center">
              <Image className="mx-auto d-block" id="sample-image-3" src="images/listCompanyProfile.png" />
            </Col>
            <Col xs={5} className="text-left">
              <h5>
                {/* eslint-disable-next-line max-len */}
                Welcome to the Companies page on Kalo Stems, your gateway to discovering a diverse array of organizations that are part of our platform. This page is designed to help students explore and learn about different companies, opening doors to new opportunities and potential future employers.
              </h5>
            </Col>
          </Row>
        </Row>
      </Col>
    </Row>
  </div>
);

export default Landing;

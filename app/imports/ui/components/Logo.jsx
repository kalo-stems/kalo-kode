import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';

const Logo = () => (
  <Navbar expand="lg" bg="light" id="logo">
    <Container>
      <Nav className="mx-auto">
        <Nav.Link>
          <Image src="/images/logo.png" fluid className="d-block mx-auto" width={400} id="logo" />
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default Logo;

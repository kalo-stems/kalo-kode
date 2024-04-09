import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';

const Logo = () => (
  <Navbar expand="lg" bg="light">
    <Container className="py-2">
      <Nav className="mx-auto">
        <Nav.Link>
          <Image src="/images/kalo-stems-logo.png" fluid className="d-block mx-auto" width={400} />
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default Logo;

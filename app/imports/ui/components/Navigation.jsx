import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, PersonFill } from 'react-bootstrap-icons';

const Navigation = () => {
  const userId = Meteor.userId();
  const isAdmin = Roles.userIsInRole(userId, 'admin');
  const isCompany = Roles.userIsInRole(userId, 'company');

  return (
    <Navbar bg="light" expand="lg">
      <Container className="justify-content-left">
        <Nav className="mx-auto">
          <Nav.Link className="active border-3">Our Mission</Nav.Link>
          <Nav.Link className="active">About Us</Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            {isCompany ? (
              <>
                <Nav.Link as={NavLink} to="/add-company">Add Company Profile</Nav.Link>
                <Nav.Link as={NavLink} to="/list-company">List Company Profiles</Nav.Link>
                <Nav.Link as={NavLink} to="/list-jobs">List Jobs</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/add-student">Add Student Profile</Nav.Link>
                <Nav.Link as={NavLink} to="/list-student">My Student Profile</Nav.Link>
              </>
            )}
            {isAdmin ? (
              <Nav.Link as={NavLink} to="/admin">Admin</Nav.Link>
            ) : ''}
          </Nav>
          <Nav className="justify-content-end">
            {userId ? (
              <NavDropdown id="navbar-current-user" title={Meteor.user().username}>
                <NavDropdown.Item id="navbar-sign-out" as={NavLink} to="/signout">
                  <BoxArrowRight />
                  {' '}
                  Sign
                  out
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} to="/signin">
                  <PersonFill />
                  Sign
                  up
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

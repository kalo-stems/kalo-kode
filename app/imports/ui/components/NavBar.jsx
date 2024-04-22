import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar = () => {
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);

  return (
    <Navbar bg="light" expand="lg">
      <Container className="justify-content-left">
        <Nav className="mx-auto">
          <Nav.Link as={NavLink} to="/mission" className="active border-3">Our Mission</Nav.Link>
          <Nav.Link as={NavLink} to="/about" className="active">About Us</Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            {currentUser ? ([
              <Nav.Link id="add-student-nav" as={NavLink} to="/add-student" key="add-student">Add Student Profile</Nav.Link>,
              <Nav.Link id="list-student-nav" as={NavLink} to="/list-student" key="list-student">List Student Profiles</Nav.Link>,
              <Nav.Link id="add-company-nav" as={NavLink} to="/add-company" key="add-company">Add Company Profile</Nav.Link>,
              <Nav.Link id="list-company-nav" as={NavLink} to="/list-company" key="list-company">List Company Profiles</Nav.Link>,
              <Nav.Link id="list-jobs-nav" as={NavLink} to="/list-jobs" key="list-jobs">List Jobs</Nav.Link>,
            ]) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Nav.Link id="admin-nav" as={NavLink} to="/admin" key="admin">Admin</Nav.Link>
            ) : ''}
          </Nav>
          <Nav className="justify-content-end">
            {currentUser === '' ? (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item as={NavLink} to="/signin" id="login-dropdown-sign-in">
                  <PersonFill />
                  Sign in
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/signup" id="login-dropdown-sign-up">
                  <PersonPlusFill />
                  Sign up
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="current-user-dropdown" title={currentUser}>
                <NavDropdown.Item as={NavLink} to="/signout" id="navbar-sign-out">
                  <BoxArrowRight />
                  Sign out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

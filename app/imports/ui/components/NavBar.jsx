import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);

  return (
    <Navbar bg="light" expand="lg">
      <Container className="justify-content-left">
        <Nav className="mx-auto">
          <Nav.Link style={{ color: 'white' }}>Our Mission</Nav.Link>
          <Nav.Link style={{ color: 'white' }}>About Us</Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {currentUser ? ([
              <Nav.Link style={{ color: 'white' }} id="list-company-nav" as={NavLink} to="/list-company" key="list">List Company Profiles</Nav.Link>,
              <Nav.Link style={{ color: 'white' }} id="list-student-nav" as={NavLink} to="/list-student" key="list">List Student Information</Nav.Link>,
              <Nav.Link style={{ color: 'white' }} id="list-jobs-nav" as={NavLink} to="/list-jobs" key="list">List Jobs</Nav.Link>,
            ]) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'student') ? (
              <Nav.Link style={{ color: 'white' }} id="add-student-nav" as={NavLink} to="/add-student" key="add">Add Student Information</Nav.Link>
            ) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Nav.Link style={{ color: 'white' }} id="list-stuff-admin-nav" as={NavLink} to="/admin" key="admin">Admin</Nav.Link>
            ) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'company') ? (
              <Nav.Link style={{ color: 'white' }} id="add-company-nav" as={NavLink} to="/add-company" key="add">Add Company Profile</Nav.Link>
            ) : ''}
          </Nav>
          <Nav className="justi fy-content-end">
            {currentUser === '' ? (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} to="/signin">
                  <PersonFill />
                  Sign
                  in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" as={NavLink} to="/signup">
                  <PersonPlusFill />
                  Sign
                  up
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown style={{ color: 'white' }} id="navbar-current-user" title={currentUser}>
                <NavDropdown.Item id="navbar-sign-out" as={NavLink} to="/signout">
                  <BoxArrowRight />
                  {' '}
                  Sign
                  out
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

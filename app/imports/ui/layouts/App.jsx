import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import ListStuffAdmin from '../pages/ListStuffAdmin';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import SignOut from '../pages/SignOut';
import NavBar from '../components/NavBar';
import SignIn from '../pages/SignIn';
import NotAuthorized from '../pages/NotAuthorized';
import LoadingSpinner from '../components/LoadingSpinner';
import Logo from '../components/Logo';
import AddStudent from '../pages/AddStudent';
import EditStudent from '../pages/EditStudent';
import AddCompany from '../pages/AddCompany';
import EditCompany from '../pages/EditCompany';
import ListJobs from '../pages/ListJobs';
import ListStudent from '../pages/ListStudent';
import ListCompany from '../pages/ListCompany';
import AboutUs from '../pages/AboutUs';
import AddJob from '../pages/AddJobs';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
const App = () => {
  const { ready } = useTracker(() => {
    const rdy = Roles.subscription.ready();
    return {
      ready: rdy,
    };
  });
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Logo />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/home" element={<ProtectedRoute><Landing /></ProtectedRoute>} />
          <Route path="/add-student" element={<ProtectedRoute><AddStudent /></ProtectedRoute>} />
          <Route path="/list-student" element={<ProtectedRoute><ListStudent /></ProtectedRoute>} />
          <Route path="/edit-student/:_id" element={<ProtectedRoute><EditStudent /></ProtectedRoute>} />
          <Route path="/add-company" element={<ProtectedRoute><AddCompany /></ProtectedRoute>} />
          <Route path="/edit-company/:_id" element={<ProtectedRoute><EditCompany /></ProtectedRoute>} />
          <Route path="/list-company" element={<ProtectedRoute><ListCompany /></ProtectedRoute>} />
          <Route path="/add-jobs" element={<ProtectedRoute><AddJob /></ProtectedRoute>} />
          <Route path="/list-jobs" element={<ProtectedRoute><ListJobs /></ProtectedRoute>} />
          <Route path="/admin" element={<AdminProtectedRoute ready={ready}><ListStuffAdmin /></AdminProtectedRoute>} />
          <Route path="/notauthorized" element={<NotAuthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

/*
 * ProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  return isLogged ? children : <Navigate to="/signin" />;
};

/**
 * AdminProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */

// eslint-disable-next-line react/prop-types
const AdminProtectedRoute = ({ ready, children }) => {
  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }
  if (!ready) {
    return <LoadingSpinner />;
  }
  const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
  return (isLogged && isAdmin) ? children : <Navigate to="/notauthorized" />;
};

/**
 * CompanyProtectedRoute
 * Checks for Meteor login and company role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const CompanyProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }
  if (!Roles.subscription.ready()) {
    return <LoadingSpinner />;
  }
  const isCompany = Roles.userIsInRole(Meteor.userId(), 'company');
  return isLogged && isCompany ? children : <Navigate to="/notauthorized" />;
};

/**
 * StudentProtectedRoute
 * Checks for Meteor login and student role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const StudentProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }
  if (!Roles.subscription.ready()) {
    return <LoadingSpinner />;
  }
  const isStudent = Roles.userIsInRole(Meteor.userId(), 'student');
  return isLogged && isStudent ? children : <Navigate to="/notauthorized" />;
};

// Require a component and location to be passed to each ProtectedRoute.
ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

ProtectedRoute.defaultProps = {
  children: <Landing />,
};

// Require a component and location to be passed to each CompanyProtectedRoute.
CompanyProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

CompanyProtectedRoute.defaultProps = {
  children: <Landing />,
};

// Require a component and location to be passed to each StudentProtectedRoute.
StudentProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

StudentProtectedRoute.defaultProps = {
  children: <Landing />,
};

export default App;

import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Students = ({ student }) => (
  <Card className="h-100">
    <Card.Body>
      <Card.Text>
        {student.fullName}
        {student.image}
        {student.phoneNumber}
        {student.major}
        {student.email}
        {student.skills}
        {student.gradDate}
        {student.awards}
        {student.description}
        {student.linkedIn}
        {student.gitHub}
      </Card.Text>
      <Link to={`/edit/${student._id}`}>Edit</Link>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Students.propTypes = {
  student: PropTypes.shape({
    fullName: PropTypes.string,
    image: PropTypes.string,
    phoneNumber: PropTypes.string,
    major: PropTypes.string,
    email: PropTypes.string,
    skills: PropTypes.string,
    gradDate: PropTypes.string,
    awards: PropTypes.string,
    description: PropTypes.string,
    linkedIn: PropTypes.string,
    gitHub: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Students;

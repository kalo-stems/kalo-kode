import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Students table. See pages/ListStudent.jsx. */
const StudentItem = ({ student }) => (
  <tr>
    <td>{student.fullName}</td>
    <td>{student.image}</td>
    <td>{student.email}</td>
    <td>{student.phoneNumber}</td>
    <td>{student.major}</td>
    <td>{student.graduationDate}</td>
    <td>{student.skills}</td>
    <td>{student.awards}</td>
    <td>{student.description}</td>
    <td>{student.linkedIn}</td>
    <td>{student.gitHub}</td>
    <td>
      <Link to={`/edit/${student._id}`}>Edit</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
StudentItem.propTypes = {
  student: PropTypes.shape({
    fullName: PropTypes.string,
    image: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    major: PropTypes.string,
    graduationDate: PropTypes.string,
    skills: PropTypes.string,
    awards: PropTypes.string,
    description: PropTypes.string,
    linkedIn: PropTypes.string,
    gitHub: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default StudentItem;

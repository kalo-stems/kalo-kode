import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Student (Admin) table. See pages/ListStudentAdmin.jsx. */
const StudentItemAdmin = ({ student }) => (
  <tr>
    <td>{student.name}</td>
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
StudentItemAdmin.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string,
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
    owner: PropTypes.string,
  }).isRequired,
};

export default StudentItemAdmin;

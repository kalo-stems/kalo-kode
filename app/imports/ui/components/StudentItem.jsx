import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Student table. */
const StudentItem = ({ student }) => (
  <tr>
    <td>{student.phoneNumber}</td>
    <td>{student.emailAddress}</td>
    <td>{student.gradDate}</td>
    <td>{student.achievements}</td>
    <td>{student.linkedIn}</td>
    <td>{student.bioDescription}</td>
    <td>{student.major}</td>
    <td>{student.skillsWanted.join(', ')}</td>
    <td>{student.skillsHave.join(', ')}</td>
    <td>{student.additionalInfo}</td>
    <td>{student.resumeUrl}</td>
    <td>{student.githubUrl}</td>
    <td>
      <Link to={`/edit/${student._id}`}>Edit</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
StudentItem.propTypes = {
  student: PropTypes.shape({
    phoneNumber: PropTypes.string,
    emailAddress: PropTypes.string,
    gradDate: PropTypes.string,
    achievements: PropTypes.string,
    linkedIn: PropTypes.string,
    bioDescription: PropTypes.string,
    major: PropTypes.string,
    skillsWanted: PropTypes.arrayOf(PropTypes.string),
    skillsHave: PropTypes.arrayOf(PropTypes.string),
    additionalInfo: PropTypes.string,
    resumeUrl: PropTypes.string,
    githubUrl: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default StudentItem;

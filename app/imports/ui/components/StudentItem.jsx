import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Student table. See pages/ListStudent.jsx. */
const StudentItem = ({ student }) => (
  <tr>
    <td>{student.name}</td>
    <td>{student.quantity}</td>
    <td>{student.condition}</td>
    <td>
      <Link to={`/edit/${student._id}`}>Edit</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
StudentItem.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    condition: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default StudentItem;

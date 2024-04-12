import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Job (Admin) table. See pages/ListJobAdmin.jsx. */
const JobItemAdmin = ({ job }) => (
  <tr>
    <td>{job.title}</td>
    <td>{job.company}</td>
    <td>{job.description}</td>
    <td>{job.requirements}</td>
    <td>{job.wage}</td>
    <td>{job.seats}</td>
    <td>{job.deadline}</td>
    <td>
      <Link to={`/edit/${job._id}`}>Edit</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
JobItemAdmin.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    requirements: PropTypes.string,
    wage: PropTypes.string,
    company: PropTypes.string,
    deadline: PropTypes.string,
    seats: PropTypes.number,
    _id: PropTypes.string,
  }).isRequired,
};

export default JobItemAdmin;

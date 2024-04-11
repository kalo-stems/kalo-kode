import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Company table. See pages/ListCompany.jsx. */
const CompanyItem = ({ company }) => (
  <tr>
    <td>{company.name}</td>
    <td>{company.logo}</td>
    <td>{company.address}</td>
    <td>{company.email}</td>
    <td>{company.links}</td>
    <td>{company.description}</td>
    <td>
      <Link to={`/edit/${company._id}`}>Edit</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
CompanyItem.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string,
    logo: PropTypes.string,
    address: PropTypes.string,
    email: PropTypes.string,
    links: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default CompanyItem;

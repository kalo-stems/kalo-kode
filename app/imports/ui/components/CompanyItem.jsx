import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Image } from 'react-bootstrap';

/** Renders a single row in the List Company table. See pages/ListCompany.jsx. */
const CompanyItem = ({ company }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={company.logo} width={75} />
      <Card.Title>{company.name} </Card.Title>
    </Card.Header>
    <Card.Body>
      <Card.Text>{company.address}</Card.Text>
      <Card.Text>{company.email}</Card.Text>
      <Card.Text>{company.links}</Card.Text>
      <Card.Text>{company.description}</Card.Text>
    </Card.Body>
    <td>
      <Link to={`/edit/${company._id}`}>Edit</Link>
    </td>
  </Card>
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

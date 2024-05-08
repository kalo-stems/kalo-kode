import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Image } from 'react-bootstrap';

/** Renders a single row in the List Student table. See pages/ListStudent.jsx. */
const StudentItem = ({ student }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={student.image} width={75} />
      <Card.Title>{student.fullName} </Card.Title>
      <Card.Text>{student.major}, Graduation: {student.graduationDate}</Card.Text>
    </Card.Header>
    <Card.Body>
      <Card.Text>About Me: {student.description}</Card.Text>
      <Card.Text>Email: {student.email}</Card.Text>
      <Card.Text>Phone Number: {student.phoneNumber}</Card.Text>
      <Card.Text>Skills: {student.skills}</Card.Text>
      <Card.Text>Awards: {student.awards}</Card.Text>
      <Card.Text>LinkedIn: {student.linkedIn}</Card.Text>
      <Card.Text>GitHub: {student.gitHub}</Card.Text>
    </Card.Body>
    <td>
      <Link to={`/edit-student/${student._id}`}>Edit</Link>
    </td>
  </Card>
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

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Container, Row } from 'react-bootstrap';
import LoadingSpinner from '../components/LoadingSpinner';
import { Students } from '../../api/student/Student';
import StudentItemAdmin from '../components/StudentItemAdmin';

/* Renders a table containing all of the Students documents. Use <StudentItemAdmin> to render each row. */
const ListStudentAdmin = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { students, ready } = useTracker(() => {
    // Get access to Students documents.
    const subscription = Meteor.subscribe(Students.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Students documents
    const items = Students.collection.find({}).fetch();
    return {
      students: items,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container fluid className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h2>List of Student Profiles</h2>
          </Col>
          <Row xs={1} md={2} lg={3} className="g-4">
            {students.map((student) => (<Col key={student._id}><StudentItemAdmin student={student} /></Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListStudentAdmin;

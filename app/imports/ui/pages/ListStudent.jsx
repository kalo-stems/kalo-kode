import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import { StudentProfile } from '../../api/student/StudentProfile';
import StudentItem from '../components/StudentItem';

/* Renders a table containing all of the Students documents. Use <StudentItem> to render each row. */
const ListStudent = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, students } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Students documents.
    const subscription = Meteor.subscribe(StudentProfile.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Students documents
    const studentItems = StudentProfile.collection.find({}).fetch();
    return {
      students: studentItems,
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
            {students.map((student) => (<Col key={student._id}><StudentItem student={student} /></Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListStudent;

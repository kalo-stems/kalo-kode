import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import { Students } from '../../api/student/Student';
import StudentItem from '../components/StudentItem';

/* Renders a table containing all of the Student documents. Use <StudentItem> to render each row. */
const ListStudent = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, students } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Student documents.
    const subscription = Meteor.subscribe(Students.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Student documents
    const studentItems = Students.collection.find({}).fetch();
    return {
      students: studentItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container id="list-student-page" className="py-3">
      <Row className="justify-content-center">
        <Col md={20}>
          <Col className="text-center">
            <h2>List Student Profiles</h2>
          </Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Image</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Major</th>
                <th>Graduation Date</th>
                <th>Skills</th>
                <th>Awards</th>
                <th>Description</th>
                <th>LinkedIn</th>
                <th>GitHub</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => <StudentItem key={student._id} student={student} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListStudent;

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Container, Row, Table } from 'react-bootstrap';
import LoadingSpinner from '../components/LoadingSpinner';
import { Students } from '../../api/student/Student';
import StudentItemAdmin from '../components/StudentItemAdmin';

/* Renders a table containing all of the Student documents. Use <StudentItemAdmin> to render each row. */
const ListStudentAdmin = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { students, ready } = useTracker(() => {
    // Get access to Student documents.
    const subscription = Meteor.subscribe(Students.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Student documents
    const items = Students.collection.find({}).fetch();
    return {
      students: items,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center"><h2>List Student Profiles (Admin)</h2></Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
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
                <th>Owner</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => <StudentItemAdmin key={student._id} student={student} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListStudentAdmin;

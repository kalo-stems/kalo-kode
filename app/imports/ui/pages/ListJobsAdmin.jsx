import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Jobs } from '../../api/job/Jobs';
import JobsItemAdmin from '../components/JobsItemAdmin';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all of the Job documents. Use <JobItemAdmin> to render each row. */
const ListJobAdmin = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { jobs, ready } = useTracker(() => {
    // Get access to Job documents.
    const subscription = Meteor.subscribe(Jobs.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Job documents
    const jobItems = Jobs.collection.find({}).fetch();
    return {
      jobs: jobItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center"><h2>List Jobs (Admin)</h2></Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Company</th>
                <th>Description</th>
                <th>Requirements</th>
                <th>Wage</th>
                <th>Seats</th>
                <th>Deadline</th>
                <th>Apply</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => <JobsItemAdmin key={job._id} job={job} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListJobAdmin;

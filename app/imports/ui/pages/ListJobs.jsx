import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Jobs } from '../../api/job/Jobs';
import LoadingSpinner from '../components/LoadingSpinner';
import JobsItem from '../components/JobsItem';

/* Renders a table containing all of the Job documents. Use <Job Item> to render each row. */
const ListJobs = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, jobs } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Job documents.
    const subscription = Meteor.subscribe(Jobs.userPublicationName);
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
    <Container id="list-job-page" className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h2>List Jobs</h2>
          </Col>
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
              {jobs.map((job) => <JobsItem key={job._id} job={job} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListJobs;

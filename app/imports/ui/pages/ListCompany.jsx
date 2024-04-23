import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Companies } from '../../api/company/Company';
import CompanyItem from '../components/CompanyItem';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all the Company documents. Use <CompanyItem> to render each row. */
const ListCompany = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, companies } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Companies.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const companyItems = Companies.collection.find({}).fetch();
    return {
      companies: companyItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={15}>
          <Col className="text-center">
            <h2>Company Profiles</h2>
          </Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Logo</th>
                <th>Address</th>
                <th>Email</th>
                <th>Links</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company) => <CompanyItem key={company._id} company={company} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListCompany;

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
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
    // Get access to Company documents.
    const subscription = Meteor.subscribe(Companies.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Company documents
    const companyItems = Companies.collection.find({}).fetch();
    return {
      companies: companyItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h2>List of Company Profiles</h2>
          </Col>
          <Row xs={1} md={2} lg={3} className="g-4">
            {companies.map((company) => (<Col key={company._id}><CompanyItem company={company} /></Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListCompany;

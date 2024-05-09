// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, NumField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'reaçct-router';
import LoadingSpinner from '../components/LoadingSpinner';
import { Jobs } from '../../api/job/Jobs';

const bridge = new SimpleSchema2Bridge(Jobs.schema);

/* Renders the EditJobs page for editing a single document. */
const EditJobs = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  // console.log('EditJobs', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Student documents.
    const subscription = Meteor.subscribe(Jobs.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Jobs.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  // console.log('EditJobs', doc, ready);
  // On successful submit, insert the data.
  const submit = (data) => {
    const { title, description, requirements, wage, company, deadline, seats } = data;
    Jobs.collection.update(_id, { $set: { title, description, requirements, wage, company, deadline, seats } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  };

  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>Edit Jobs Opportunities</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <TextField name="titel" />
                  </Col>
                  <Col xs={3}>
                    <TextField name="company" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <LongTextField name="description" />
                    <LongTextField name="requirements" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <TextField name="wage" />
                  </Col>
                  <Col>
                    <NumField name="seats" decimal={null} />
                  </Col>
                  <Col>
                    <TextField name="deadline" />
                  </Col>
                </Row>
                <SubmitField value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default EditJobs;

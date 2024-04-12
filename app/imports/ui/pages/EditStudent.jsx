import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import LoadingSpinner from '../components/LoadingSpinner';
import { Students } from '../../api/student/Student';

const bridge = new SimpleSchema2Bridge(Students.schema);

/* Renders the EditStudent page for editing a single document. */
const EditStudent = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  // console.log('EditStudent', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Student documents.
    const subscription = Meteor.subscribe(Students.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Students.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  // console.log('EditStudent', doc, ready);
  // On successful submit, insert the data.
  const submit = (data) => {
    const { phoneNumber, major, email, skills, gradDate, awards, description, linkedIn, gitHub } = data;
    Students.collection.update(_id, { $set: { phoneNumber, major, email, skills, gradDate, awards, description, linkedIn, gitHub } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Information updated successfully', 'success')));
  };

  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Edit My Information</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <TextField name="phoneNumber" />
                <TextField name="major" />
                <TextField name="email" />
                <TextField name="skills" />
                <TextField name="gradDate" />
                <TextField name="awards" />
                <LongTextField name="description" />
                <LongTextField name="linkedIn" />
                <LongTextField name="gitHub" />
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

export default EditStudent;

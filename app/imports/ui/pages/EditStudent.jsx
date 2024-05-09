import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import LoadingSpinner from '../components/LoadingSpinner';
import { StudentProfile } from '../../api/student/StudentProfile';

const bridge = new SimpleSchema2Bridge(StudentProfile.schema);

/* Renders the EditStudent page for editing a single document. */
const EditStudent = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  // console.log('EditStudent', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Student documents.
    const subscription = Meteor.subscribe(StudentProfile.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = StudentProfile.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  // console.log('EditStudent', doc, ready);
  // On successful submit, insert the data.
  const submit = (data) => {
    const { email, phoneNumber, major, graduationDate, skills, awards, description, linkedIn, gitHub } = data;
    StudentProfile.collection.update(_id, { $set: { email, phoneNumber, major, graduationDate, skills, awards, description, linkedIn, gitHub } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  };

  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>Edit Student Profile</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <TextField name="email" />
                  </Col>
                  <Col>
                    <TextField name="phoneNumber" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <TextField name="major" />
                  </Col>
                  <Col>
                    <TextField name="graduationDate" />
                  </Col>
                </Row>
                <TextField name="skills" />
                <TextField name="awards" />
                <LongTextField name="description" />
                <Row>
                  <Col>
                    <TextField name="linkedIn" />
                  </Col>
                  <Col>
                    <TextField name="gitHub" />
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

export default EditStudent;

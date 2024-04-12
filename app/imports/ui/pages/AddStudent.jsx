import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Students } from '../../api/student/Student';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  phoneNumber: String,
  major: String,
  email: String,
  skills: String,
  gradDate: String,
  awards: String,
  description: String,
  linkedIn: String,
  gitHub: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStudent page for adding a document. */
const AddStudent = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { phoneNumber, major, email, skills, gradDate, awards, description, linkedIn, gitHub } = data;
    const owner = Meteor.user().username;
    Students.collection.insert(
      { phoneNumber, major, email, skills, gradDate, awards, description, linkedIn, gitHub, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Information added successfully', 'success');
          formRef.reset();
        }
      },
    );
  };

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>Add My Information</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
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
  );
};

export default AddStudent;

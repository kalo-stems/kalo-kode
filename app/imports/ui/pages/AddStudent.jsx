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
  name: String,
  image: String,
  email: String,
  phoneNumber: String,
  major: String,
  graduationDate: String,
  skills: String,
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
    const { name, image, email, phoneNumber, major, graduationDate, skills, awards, description, linkedIn, gitHub } = data;
    const owner = Meteor.user().username;
    Students.collection.insert(
      { name, image, email, phoneNumber, major, graduationDate, skills, awards, description, linkedIn, gitHub, owner },
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
        <Col xs={8}>
          <Col className="text-center"><h2>Add Student Profile</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <TextField name="name" />
                  </Col>
                </Row>
                <TextField name="image" />
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
  );
};

export default AddStudent;

import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  phoneNumber: String,
  emailAddress: String,
  gradDate: Date,
  achievements: String,
  linkedIn: String,
  bioDescription: String,
  major: String,
  skills: String,
  awards: String,
  dob: Date,
  github: String,
});

/* Renders the StudentInfo page for adding student information. */
const StudentInfo = () => {
  // On submit, insert the data.
  const submit = (data, formRef) => {
    const owner = Meteor.user()?.username; // Use optional chaining to access username safely
    // Insert or handle data here (e.g., save to database)
    console.log(data);
    formRef.reset(); // Reset the form after submission
    swal('Success', 'Student information added successfully', 'success');
  };

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10} md={8}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Student Information</h2>
              <AutoForm ref={ref => { fRef = ref; }} schema={formSchema} onSubmit={data => submit(data, fRef)}>
                <TextField name="phoneNumber" label="Phone Number" />
                <TextField name="emailAddress" label="Email Address" />
                <TextField name="gradDate" label="Graduation Date" type="date" />
                <TextField name="achievements" label="Achievements" />
                <TextField name="linkedIn" label="LinkedIn" />
                <TextField name="bioDescription" label="Bio Description" />
                <TextField name="major" label="Major" />
                <TextField name="skills" label="Skills" />
                <TextField name="awards" label="Awards" />
                <TextField name="dob" label="Date of Birth" type="date" />
                <TextField name="github" label="GitHub" />
                <SubmitField value="Submit" className="btn btn-primary mt-3" />
                <ErrorsField />
              </AutoForm>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentInfo;

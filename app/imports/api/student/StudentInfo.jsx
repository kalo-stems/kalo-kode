import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, SubmitField, TextField, LongTextField, ListField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Students } from '/imports/api/students/Students';

const StudentInfoPage = () => {
  const submit = (data, formRef) => {
    const owner = Meteor.user()?.username;
    Students.collection.insert({ ...data, owner });
    formRef.reset();
    swal('Success', 'Student profile created successfully', 'success');
  };

  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10} md={8}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Student Information</h2>
              <AutoForm ref={ref => { fRef = ref; }} schema={Students.schema} onSubmit={data => submit(data, fRef)}>
                <TextField name="phoneNumber" label="Phone Number" />
                <TextField name="emailAddress" label="Email Address" />
                <TextField name="gradDate" label="Graduation Date" type="date" />
                <TextField name="achievements" label="Achievements" />
                <TextField name="linkedIn" label="LinkedIn" />
                <TextField name="bioDescription" label="Bio Description" />
                <TextField name="major" label="Major" />
                <ListField name="skillsWanted" label="Skills Wanted" />
                <ListField name="skillsHave" label="Skills Have" />
                <LongTextField name="additionalInfo" label="Additional Info" />
                <TextField name="resumeUrl" label="Resume URL" />
                <TextField name="githubUrl" label="GitHub URL" />
                <SubmitField value="Create Profile" className="btn btn-primary mt-3" />
                <ErrorsField />
              </AutoForm>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentInfoPage;

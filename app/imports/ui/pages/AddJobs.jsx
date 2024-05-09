import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, NumField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Jobs } from '../../api/job/Jobs';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  title: String,
  description: String,
  requirements: String,
  wage: String,
  company: String,
  deadline: String,
  seats: Number,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddJob page for adding a document. */
const AddJob = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { title, description, requirements, wage, company, deadline, seats } = data;
    const owner = Meteor.user().username;
    Jobs.collection.insert(
      { title, description, requirements, wage, company, deadline, seats, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
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
          <Col className="text-center"><h2>Add Job Opportunities</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <TextField name="title" />
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
  );
};

export default AddJob;

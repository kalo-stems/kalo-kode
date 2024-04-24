import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, SubmitField, TextField, LongTextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Companies } from '../../api/company/Company';

// Create a schema to specify the structure of the companyData to appear in the form.
const formSchema = new SimpleSchema({
  name: String,
  logo: String,
  address: String,
  email: String,
  links: String,
  description: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddCompany page for adding a document. */
const AddCompany = () => {

  // On submit, insert the companyData.
  const submit = (companyProfile, formRef) => {
    const { name, logo, address, email, links, description } = companyProfile;
    const owner = Meteor.user().username;
    Companies.collection.insert(
      { name, logo, address, email, links, description, owner },
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
        <Col xs={8}>
          <Col className="text-center"><h2>Add Company Profile</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={companyData => submit(companyData, fRef)}>
            <Card>
              <Card.Body>
                <TextField name="logo" />
                <TextField name="name" />
                <TextField name="address" />
                <TextField name="email" />
                <TextField name="links" />
                <LongTextField name="description" />
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

export default AddCompany;

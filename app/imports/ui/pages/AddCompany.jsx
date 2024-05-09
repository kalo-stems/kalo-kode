import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, SubmitField, TextField, LongTextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Navigate } from 'react-router-dom';
import { Companies } from '../../api/company/Company';

// Create a schema to specify the structure of the companyData to appear in the form.
const formSchema = new SimpleSchema({
  name: String,
  logo: { type: Array, optional: true },
  'logo.$': { type: String, optional: true },
  address: String,
  email: String,
  links: String,
  description: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddCompany page for adding a document. */
const AddCompany = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [route, setRoute] = useState('');
  const [redirect, setRedirect] = useState(false);

  // On submit, insert the companyData.
  const submit = (companyProfile, formRef) => {
    const { name, address, email, links, description } = companyProfile;
    const owner = Meteor.user().username;
    const logoArray = selectedImage ? [selectedImage] : ['/images/meteor-mongo.png'];
    const newRoute = Companies.collection.insert(
      { name, logo: logoArray, address, email, links, description, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      },
    );
    setRoute(newRoute);
    setRedirect(true);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Use FileReader to read the selected image as a data URL
      const reader = new FileReader();

      reader.onload = (readerEvent) => {
        setSelectedImage(readerEvent.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return redirect ? (<Navigate to={`/company/${route}`} />) : (
    <Container id="add-company-page" className="py-3">
      <Row className="justify-content-center">
        <Col xs={8}>
          <Col className="text-center"><h2>Add Company Profile</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={companyData => submit(companyData, fRef)}>
            <Card>
              <Card.Body>
                <Row>
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label>Logo </label>
                  <input type="file" onChange={handleFileUpload} accept="image/*" />
                  {selectedImage && <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '300px' }} />}
                </Row>
                <Row style={{ height: '20px' }} />
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

import React, { useState } from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import LoadingSpinner from '../components/LoadingSpinner';
import { Companies } from '../../api/company/Company';

const bridge = new SimpleSchema2Bridge(Companies.schema);

/* Renders the EditCompany page for editing a single document. */
const EditCompany = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  // console.log('EditCompany', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Company documents.
    const subscription = Meteor.subscribe(Companies.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Companies.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  // console.log('EditCompany', doc, ready);
  // On successful submit, insert the data.
  const submit = (companyProfile) => {
    const { name, address, email, links, description } = companyProfile;
    const logoArray = selectedImage ? [selectedImage] : ['/images/meteor-logo.png'];
    Companies.collection.update(_id, { $set: { name, logo: logoArray, address, email, links, description } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
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

  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Edit Company Profile</h2></Col>
          <AutoForm schema={bridge} onSubmit={companyProfile => submit(companyProfile)} model={doc}>
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
  ) : <LoadingSpinner />;
};

export default EditCompany;

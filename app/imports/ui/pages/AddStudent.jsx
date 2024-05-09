import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Navigate } from 'react-router-dom';
import { Students } from '../../api/student/Student';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  fullName: String,
  image: Array,
  'image.$': String,
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
  const [selectedImage, setSelectedImage] = useState(null);
  const [route, setRoute] = useState('');
  const [redirect, setRedirect] = useState(false);

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { fullName, email, phoneNumber, major, graduationDate, skills, awards, description, linkedIn, gitHub } = data;
    const owner = Meteor.user().username;
    const imageArray = selectedImage ? [selectedImage] : ['/images/meteor-mongo.png'];
    const newRoute = Students.collection.insert(
      { fullName, image: imageArray, email, phoneNumber, major, graduationDate, skills, awards, description, linkedIn, gitHub, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Information added successfully', 'success');
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
  return redirect ? (<Navigate to={`/student/${route}`} />) : (
    <Container id="add-student-page" className="py-3">
      <Row className="justify-content-center">
        <Col xs={8}>
          <Col className="text-center"><h2>Add Student Profile</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <TextField name="fullName" label="Full Name" />
                  </Col>
                </Row>
                <Row>
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label>Image: </label>
                  <input type="file" onChange={handleFileUpload} accept="image/*" />
                  {selectedImage && <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '300px' }} />}
                </Row>
                <Row style={{ height: '20px' }} />
                <Row>
                  <Col>
                    <TextField name="email" />
                  </Col>
                  <Col>
                    <TextField name="phoneNumber" label="Phone Number e.g. (XXX) XXX-XXXX" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <TextField name="major" label="Major (e.g. B.S. Computer Science)" />
                  </Col>
                  <Col>
                    <TextField name="graduationDate" label="Graduation Date (e.g. May 2025)" />
                  </Col>
                </Row>
                <TextField name="skills" />
                <TextField name="awards" />
                <LongTextField name="description" placeholder="Tell us about yourself in approximately 100 words" />
                <Row>
                  <Col>
                    <TextField name="linkedIn" label="LinkedIn" />
                  </Col>
                  <Col>
                    <TextField name="gitHub" label="GitHub" />
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

import React, { useState } from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import LoadingSpinner from '../components/LoadingSpinner';
import { Students } from '../../api/student/Student';

const bridge = new SimpleSchema2Bridge(Students.schema);

/* Renders the EditStudent page for editing a single document. */
const EditStudent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  // console.log('EditStudent', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Students documents.
    const subscription = Meteor.subscribe(Students.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Students.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  // console.log('EditStudent', doc, ready);
  // On successful submit, insert the data.
  const submit = (data) => {
    const { fullName, email, phoneNumber, major, graduationDate, skills, awards, description, linkedIn, gitHub } = data;
    const imageArray = selectedImage ? [selectedImage] : ['/images/meteor-logo.png'];
    Students.collection.update(_id, {
      $set: {
        fullName,
        image: imageArray,
        email,
        phoneNumber,
        major,
        graduationDate,
        skills,
        awards,
        description,
        linkedIn,
        gitHub,
      },
    }, (error) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        swal('Success', 'Information updated successfully', 'success');
      }
    });
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
        <Col xs={10}>
          <Col className="text-center"><h2>Edit Student Profile</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <TextField name="fullName" label="Full Name" />
                  </Col>
                </Row>
                <Row>
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label>Image </label>
                  <input type="file" onChange={handleFileUpload} accept="image/*" />
                  {selectedImage && <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '300px' }} />}
                </Row>
                <Row style={{ height: '20px' }} />
                <Row>
                  <Col>
                    <TextField name="email" />
                  </Col>
                  <Col>
                    <TextField name="phoneNumber" label="Phone Number" />
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
                <LongTextField name="description" />
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
  ) : <LoadingSpinner />;
};

export default EditStudent;

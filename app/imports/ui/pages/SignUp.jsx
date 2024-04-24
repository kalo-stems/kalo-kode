import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorsField, SubmitField, TextField, SelectField } from 'uniforms-bootstrap5';
import { ComponentIDs, PageIDs } from '../utilities/ids';

/**
 * SignUp component is similar to signin component, but we create a new user instead.
 */
const SignUp = () => {
  const [error, setError] = useState('');
  const [redirectToReferer, setRedirectToRef] = useState(false);

  const schema = new SimpleSchema({
    email: String,
    password: String,
    role: {
      type: String,
      allowedValues: ['student', 'company'],
      defaultValue: 'student',
    },
  });
  const bridge = new SimpleSchema2Bridge(schema);

  const createUserRedirect = (email, role) => {
    if (role === 'student') {
      return '/add-student'; // Redirect to student dashboard
    } if (role === 'company') {
      return '/add-company'; // Redirect to company dashboard
    }
    // Return a default redirection or handle the case where role is neither student nor company
    return '/default-dashboard';
  };

  /* Handle SignUp submission. Create user account and a profile entry, then redirect to the home page. */
  const submit = (doc) => {
    const { email, password, role } = doc;
    Accounts.createUser({ email, username: email, password, role }, (err) => {
      if (err) {
        setError(err.reason);
      } else {
        setError('');
        const redirectTo = createUserRedirect(email, role);
        setRedirectToRef(redirectTo);
      }
    });
  };

  if (redirectToReferer) {
    return (<Navigate to="/home" />);
  }

  return (
    <Container id={PageIDs.signUpPage}>
      <Row className="justify-content-center">
        <Col xs={9}>
          <Col className="text-center">
            <h2>Register your account</h2>
          </Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)}>
            <Card>
              <Card.Body>
                <TextField id={ComponentIDs.signUpFormEmail} name="email" placeholder="E-mail address" />
                <TextField id={ComponentIDs.signUpFormPassword} name="password" placeholder="Password" type="password" />
                <SelectField id={ComponentIDs.signUpFormRole} name="role" placeholder="role" />
                <ErrorsField />
                <SubmitField id={ComponentIDs.signUpFormSubmit} />
              </Card.Body>
            </Card>
          </AutoForm>
          <Alert variant="secondary">
            Already have an account? Login
            {' '}
            <Link to="/signin">here</Link>
          </Alert>
          {error === '' ? (
            ''
          ) : (
            <Alert variant="danger">
              <Alert.Heading>Registration was not successful</Alert.Heading>
              {error}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;

import React from 'react';
import { Field } from 'redux-form';

import { Button } from 'react-bootstrap/lib';

const SignIn = ({ renderField, disableSignInButton }) => (
  <div>
    <Field
      name="name"
      label="Username or email address"
      component={renderField}
      type="text"
    />

    <Field
      name="password"
      component={renderField}
      type="password"
      label="Password"
    />
    <div>
      <Button
        type="submit"
        bsStyle="primary"
        disabled={disableSignInButton}
        bsSize="large"
        block
      >
        Sign in
      </Button>
    </div>
  </div>
);

export default SignIn;

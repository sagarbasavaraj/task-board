import React from 'react';
import { Field } from 'redux-form';

import { Button } from 'react-bootstrap/lib';

const SignUp = ({ renderField, disableSignUpButton }) => (
  <div>
    <Field
      name="name"
      label="Username"
      component={renderField}
      type="text"
      placeholder="Username"
    />

    <Field
      name="email"
      component={renderField}
      type="email"
      label="Email"
      placeholder="you@example.com"
    />

    <Field
      name="password"
      component={renderField}
      type="password"
      label="Password"
      placeholder="Password"
    />

    <div>
      <Button
        type="submit"
        bsStyle="primary"
        disabled={disableSignUpButton}
        bsSize="large"
        block
      >
        Sign up for Taskboard
      </Button>
    </div>
  </div>
);

export default SignUp;

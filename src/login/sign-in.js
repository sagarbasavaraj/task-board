import React, { PureComponent } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button } from 'react-bootstrap/lib';

import './login.css';

import RenderField from './render-field';

class SignIn extends PureComponent {
  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <div className="l-signin-container">
        <form onSubmit={handleSubmit}>
          <Field
            name="name"
            label="Username or email address"
            component={RenderField}
            type="text"
          />

          <Field
            name="password"
            component={RenderField}
            type="password"
            label="Password"
          />
          <div>
            <Button
              type="submit"
              bsStyle="primary"
              disabled={pristine || submitting}
              bsSize="large"
              block
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'SignIn' })(SignIn);

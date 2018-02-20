import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';

import { Button } from 'react-bootstrap/lib';

import './login.css';
import RenderField from './render-field';

class SignUp extends PureComponent {
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div className="l-signup-container">
        <form onSubmit={handleSubmit}>
          <Field
            name="name"
            label="Username"
            component={RenderField}
            type="text"
            placeholder="Username"
          />

          <Field
            name="email"
            component={RenderField}
            type="email"
            label="Email"
            placeholder="you@example.com"
          />

          <Field
            name="password"
            component={RenderField}
            type="password"
            label="Password"
            placeholder="Password"
            helpContent="Use at least one lowercase letter, one numeral, and seven characters."
          />

          <div>
            <Button
              type="submit"
              bsStyle="primary"
              disabled={pristine || submitting}
              bsSize="large"
              block
            >
              Sign up for Taskboard
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'SignUp' })(SignUp);

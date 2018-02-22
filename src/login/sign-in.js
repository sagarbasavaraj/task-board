import React, { PureComponent } from 'react';
import { reduxForm, Field } from 'redux-form';

import './login.css';

import { RenderField, Button } from '../common';

class SignIn extends PureComponent {
  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <div className="l-signin-container">
        <form onSubmit={handleSubmit}>
          <Field
            name="name"
            label="login:userNameOrEmail"
            component={RenderField}
            type="text"
          />

          <Field
            name="password"
            component={RenderField}
            type="password"
            label="login:password"
          />
          <div>
            <Button
              msg="login:signIn"
              type="submit"
              bsStyle="primary"
              disabled={pristine || submitting}
              bsSize="large"
              block
            />
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'SignIn' })(SignIn);

import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { signUpUser } from '../reducers/login-actions';

import { Button, RenderField } from '../common';

import './login.css';

class SignUp extends PureComponent {
  constructor(props) {
    super(props);
    this.signUpUser = this.signUpUser.bind(this);
  }

  signUpUser(data) {
    this.props.signUpUser(data);
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div className="l-signup-container">
        <form onSubmit={handleSubmit(this.signUpUser)}>
          <Field
            name="name"
            label="login:userName"
            component={RenderField}
            type="text"
            placeholder="Username"
          />

          <Field
            name="email"
            component={RenderField}
            type="email"
            label="login:email"
            placeholder="you@example.com"
          />

          <Field
            name="password"
            component={RenderField}
            type="password"
            label="login:password"
            placeholder="Password"
            helpContent="login:passwordHelpContent"
          />

          <div>
            <Button
              msg="login:signUp"
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

export default reduxForm({ form: 'SignUp' })(
  connect(undefined, { signUpUser })(SignUp)
);

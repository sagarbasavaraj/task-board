import React, { PureComponent } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import { signInUser } from '../reducers/actions/login-actions';

import './login.css';

import { RenderField, Button } from '../common';

class SignIn extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignIn(userCredentials) {
    this.props.signInUser(userCredentials);
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <div className="l-signin-container">
        <form onSubmit={handleSubmit(this.handleSignIn)}>
          <Field
            name="email"
            label="login:email"
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

export default reduxForm({ form: 'SignIn' })(
  connect(undefined, { signInUser })(SignIn)
);

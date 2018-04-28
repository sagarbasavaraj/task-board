import React, { PureComponent } from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { signInUser, clearError } from '../reducers/actions/login-actions';

import './login.css';

import { TextField, Button } from '../common';
import { emailVaidator, validateForm } from './validation';

class SignIn extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  componentWillUnmount() {
    this.props.clearError();
  }

  handleSignIn(userCredentials) {
    const errors = validateForm(userCredentials);
    if (isEmpty(errors)) {
      this.props.signInUser(userCredentials);
    } else {
      throw new SubmissionError(errors);
    }
  }

  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      authError,
      clearError
    } = this.props;

    return (
      <div className="l-signin-container">
        <form onSubmit={handleSubmit(this.handleSignIn)} autoComplete="off">
          <Field
            name="email"
            label="login:email"
            component={TextField}
            type="text"
            onChange={clearError}
            errorMsg={authError.email}
            validate={[emailVaidator]}
          />

          <Field
            name="password"
            component={TextField}
            type="password"
            label="login:password"
            onChange={clearError}
            errorMsg={authError.password}
          />
          <div>
            <Button
              className="l-button"
              msg="login:signIn"
              type="submit"
              primary
              disabled={pristine || submitting}
              fullWidth
            />
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'SignIn' })(
  connect(state => ({ authError: state.login.authError || {} }), {
    signInUser,
    clearError
  })(SignIn)
);

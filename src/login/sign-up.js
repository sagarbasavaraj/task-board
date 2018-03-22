import React, { PureComponent } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { signUpUser, clearError } from '../reducers/actions/login-actions';

import { Button, RenderField } from '../common';
import { emailVaidator, passwordValidator, validateForm } from './validation';

import './login.css';

class SignUp extends PureComponent {
  constructor(props) {
    super(props);
    this.signUpUser = this.signUpUser.bind(this);
  }

  componentWillUnmount() {
    this.props.clearError();
  }

  signUpUser(data) {
    const errors = validateForm(data);
    if (isEmpty(errors)) {
      this.props.signUpUser(data);
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
      <div className="l-signup-container">
        <form onSubmit={handleSubmit(this.signUpUser)} autoComplete="off">
          <Field
            name="name"
            label="login:userName"
            component={RenderField}
            type="text"
            placeholder="Username"
            errorMsg={authError.name}
          />

          <Field
            name="email"
            component={RenderField}
            type="email"
            label="login:email"
            onChange={clearError}
            placeholder="you@example.com"
            errorMsg={authError.email}
            validate={[emailVaidator]}
          />

          <Field
            name="password"
            component={RenderField}
            type="password"
            label="login:password"
            placeholder="Password"
            onChange={clearError}
            helpContent="login:passwordHelpContent"
            errorMsg={authError.password}
            validate={[passwordValidator]}
          />

          <div>
            <Button
              className="l-button"
              msg="login:signUp"
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

export default reduxForm({ form: 'SignUp' })(
  connect(state => ({ authError: state.login.authError || {} }), {
    signUpUser,
    clearError
  })(SignUp)
);

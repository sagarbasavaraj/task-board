import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import classnames from 'classnames';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap/lib';

import './login.css';
import SignUp from './sign-up';
import SignIn from './sign-in';

const renderField = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, warning }
}) => (
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...input} placeholder={placeholder} type={type} />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </FormGroup>
);

class LoginForm extends Component {
  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      match,
      showSignUp,
      showSignIn
    } = this.props;

    const modeSignIn = match && match.params.mode === 'signIn';
    const modeSignUp = match && match.params.mode === 'signUp';
    const loginClassContainer = classnames('l-login-container', {
      'l-signin': modeSignIn,
      'l-signup': modeSignUp
    });

    return (
      <div className={loginClassContainer}>
        <form onSubmit={handleSubmit}>
          {showSignIn || modeSignIn ? (
            <SignIn
              renderField={renderField}
              disableSignInButton={pristine || submitting}
            />
          ) : null}
          {showSignUp || modeSignUp ? (
            <SignUp
              renderField={renderField}
              disableSignUpButton={pristine || submitting}
            />
          ) : null}
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'login' })(LoginForm);

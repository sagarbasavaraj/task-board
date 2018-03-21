import React, { PureComponent } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import { signInUser, clearError } from '../reducers/actions/login-actions';

import './login.css';

import { RenderField, Button } from '../common';

class SignIn extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  componentWillUnmount() {
    this.props.clearError();
  }

  handleSignIn(userCredentials) {
    this.props.signInUser(userCredentials);
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
            component={RenderField}
            type="text"
            onChange={clearError}
            errorMsg={authError.email}
          />

          <Field
            name="password"
            component={RenderField}
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

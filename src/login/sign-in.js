import React, { PureComponent } from 'react';
import { object, func } from 'prop-types';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { signInUser, clearError } from '../reducers/actions/login-actions';

import './login.css';

import { TextField, Button } from '../common';
import { emailValidator, validateForm } from './validation';

class SignIn extends PureComponent {
  static propTypes = {
    authError: object,
    dispatch: func
  };

  constructor(props) {
    super(props);
    this.handleSignIn = this.handleSignIn.bind(this);
    this._clearError = this._clearError.bind(this);
  }

  componentWillUnmount() {
    this._clearError();
  }

  handleSignIn(userCredentials) {
    const errors = validateForm(userCredentials);
    if (isEmpty(errors)) {
      this.props.dispatch(signInUser(userCredentials));
    } else {
      throw new SubmissionError(errors);
    }
  }

  _clearError() {
    this.props.dispatch(clearError());
  }

  render() {
    const { handleSubmit, pristine, submitting, authError } = this.props;

    return (
      <div className="l-signin-container">
        <form onSubmit={handleSubmit(this.handleSignIn)} autoComplete="off">
          <Field
            name="email"
            label="login:email"
            component={TextField}
            type="text"
            onChange={this._clearError}
            errorMsg={authError.email}
            validate={[emailValidator]}
          />

          <Field
            name="password"
            component={TextField}
            type="password"
            label="login:password"
            onChange={this._clearError}
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
  connect(state => ({ authError: state.login.authError || {} }))(SignIn)
);

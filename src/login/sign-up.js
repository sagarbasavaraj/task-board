import React, { PureComponent } from 'react';
import { object, func } from 'prop-types';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { signUpUser, clearError } from '../reducers/actions/login-actions';

import { Button, TextField } from '../common';
import { emailValidator, passwordValidator, validateForm } from './validation';

import './login.css';

class SignUp extends PureComponent {
  static propTypes = {
    authError: object,
    dispatch: func
  };

  constructor(props) {
    super(props);
    this.signUpUser = this.signUpUser.bind(this);
    this._clearError = this._clearError.bind(this);
  }

  componentWillUnmount() {
    this._clearError();
  }

  signUpUser(data) {
    const errors = validateForm(data);
    if (isEmpty(errors)) {
      this.props.dispatch(signUpUser(data));
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
      <div className="l-signup-container">
        <form onSubmit={handleSubmit(this.signUpUser)} autoComplete="off">
          <Field
            name="name"
            label="login:userName"
            component={TextField}
            type="text"
            placeholder="Username"
            errorMsg={authError.name}
          />

          <Field
            name="email"
            component={TextField}
            type="email"
            label="login:email"
            onChange={this._clearError}
            placeholder="you@example.com"
            errorMsg={authError.email}
            validate={[emailValidator]}
          />

          <Field
            name="password"
            component={TextField}
            type="password"
            label="login:password"
            placeholder="Password"
            onChange={this._clearError}
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
  connect(state => ({ authError: state.login.authError || {} }))(SignUp)
);

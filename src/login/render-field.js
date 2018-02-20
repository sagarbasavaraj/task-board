import React from 'react';

import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap/lib';

const renderField = ({
  input,
  label,
  type,
  placeholder,
  helpContent,
  meta: { touched, error, warning }
}) => (
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...input} placeholder={placeholder} type={type} />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    {helpContent ? <HelpBlock>{helpContent}</HelpBlock> : null}
  </FormGroup>
);

export default renderField;

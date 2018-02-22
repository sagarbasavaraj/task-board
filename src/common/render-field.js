import React from 'react';

import { resolveDisplayText } from '../helpers/resolveDisplayText';

import withTranslate from './with-translate';

import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap/lib';

const renderField = ({
  t,
  input,
  label,
  text,
  type,
  placeholder,
  helpContent,
  meta: { touched, error, warning }
}) => {
  const controlLabel = resolveDisplayText(t, label, text);
  const translatedHelpContent = resolveDisplayText(t, helpContent);
  return (
    <FormGroup>
      <ControlLabel>{controlLabel}</ControlLabel>
      <FormControl {...input} placeholder={placeholder} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
      {translatedHelpContent ? (
        <HelpBlock>{translatedHelpContent}</HelpBlock>
      ) : null}
    </FormGroup>
  );
};

export default withTranslate(renderField);

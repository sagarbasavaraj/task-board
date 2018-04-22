import React from 'react';
import TextField from 'material-ui/TextField';

import { resolveDisplayText } from '../helpers/resolveDisplayText';

import withTranslate from './with-translate';

import { HelpBlock } from 'react-bootstrap/lib';

const renderField = ({
  t,
  input,
  label,
  text,
  type,
  placeholder,
  helpContent,
  errorMsg,
  meta: { touched, error, warning },
  ...restProps
}) => {
  const resolvedErrorMsg = resolveDisplayText(t, error || errorMsg);
  const floatingLabelText = resolveDisplayText(t, label, text);
  const translatedHelpContent = resolveDisplayText(t, helpContent);
  return (
    <div>
      <TextField
        {...input}
        type={type}
        errorText={touched && resolvedErrorMsg}
        floatingLabelText={floatingLabelText}
        {...restProps}
      />
      {translatedHelpContent ? (
        <HelpBlock>{translatedHelpContent}</HelpBlock>
      ) : null}
    </div>
  );
};

export default withTranslate(renderField);

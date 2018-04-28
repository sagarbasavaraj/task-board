import React from 'react';
import { func, object, string } from 'prop-types';
import { TextField } from 'material-ui';

import { resolveDisplayText } from '../helpers/resolveDisplayText';

import withTranslate from './with-translate';

import { HelpBlock } from 'react-bootstrap/lib';

const RenderTextField = ({
  t,
  input,
  label,
  text,
  placeholder,
  helpContent,
  errorMsg,
  meta,
  type,
  ...restProps
}) => {
  const { touched, error } = meta;
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

RenderTextField.propTypes = {
  t: func,
  input: object,
  label: string,
  text: string,
  tyep: string,
  placeholder: string,
  helpContent: string,
  errorMsg: string,
  meta: object,
  restProps: object
};

export default withTranslate(RenderTextField);

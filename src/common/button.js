import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap/lib';

import { resolveDisplayText } from '../helpers/resolveDisplayText';

import withTranslate from './with-translate';

const Button = ({ t, msg, text, ...restProps }) => {
  const displayText = resolveDisplayText(t, msg, text);
  return <BootstrapButton {...restProps}>{displayText}</BootstrapButton>;
};
export default withTranslate(Button);

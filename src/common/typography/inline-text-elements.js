import React from 'react';
import { func, string } from 'prop-types';

import { resolveDisplayText } from '../../helpers/resolveDisplayText';

import withTranslate from '../with-translate';

const Span = ({ t, msg, text, className }) => {
  const displayText = resolveDisplayText(t, msg, text);
  return <span className={className}>{displayText}</span>;
};

Span.propTypes = {
  t: func.isRequired,
  text: string,
  msg: string,
  className: string
};

Span.defaultProps = {
  text: '',
  msg: ''
};

export default withTranslate(Span);

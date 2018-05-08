import React from 'react';
import { func, string } from 'prop-types';

import { resolveDisplayText } from '../../helpers/resolveDisplayText';

import withTranslate from '../with-translate';

const Paragraph = ({ t, text, msg, className }) => {
  const displayText = resolveDisplayText(t, msg, text);
  return <p className={className}>{displayText}</p>;
};

Paragraph.propTypes = {
  t: func.isRequired,
  text: string,
  msg: string,
  className: string
};

Paragraph.defaultProps = {
  text: '',
  msg: ''
};

export default withTranslate(Paragraph);

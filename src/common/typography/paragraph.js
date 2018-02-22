import React from 'react';

import { resolveDisplayText } from '../../helpers/resolveDisplayText';

import withTranslate from '../with-translate';

const Paragraph = ({ t, text, msg, className }) => {
  const displayText = resolveDisplayText(t, msg, text);
  return <p className={className}>{displayText}</p>;
};

export default withTranslate(Paragraph);

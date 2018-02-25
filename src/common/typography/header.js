import React from 'react';

import { resolveDisplayText } from '../../helpers/resolveDisplayText';

import withTranslate from '../with-translate';

const Header = ({ t, text, msg, className }) => {
  const displayText = resolveDisplayText(t, msg, text);
  return <h1 className={className}>{displayText}</h1>;
};

export default withTranslate(Header);
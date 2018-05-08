import React from 'react';
import { func, string } from 'prop-types';

import { resolveDisplayText } from '../../helpers/resolveDisplayText';

import withTranslate from '../with-translate';

const Header = ({ t, text, msg, className }) => {
  const displayText = resolveDisplayText(t, msg, text);
  return <h1 className={className}>{displayText}</h1>;
};

Header.propTypes = {
  t: func.isRequired,
  text: string,
  msg: string,
  className: string
};

Header.defaultProps = {
  text: '',
  msg: ''
};

export default withTranslate(Header);

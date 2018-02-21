import React from 'react';

import withTranslate from '../with-translate';

const Header = ({ t, text, msg, className }) => {
  if (!text && !msg) {
    return null;
  }
  const finalText = msg ? t(msg) : text;
  return <h1 className={className}>{finalText}</h1>;
};

export default withTranslate(Header);

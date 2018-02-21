import React from 'react';

import withTranslate from '../with-translate';

const Paragraph = ({ t, text, msg, className }) => {
  if (!text && !msg) {
    return null;
  }
  const finalText = msg ? t(msg) : text;
  return <p className={className}>{finalText}</p>;
};

export default withTranslate(Paragraph);

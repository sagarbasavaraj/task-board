import React from 'react';

import { resolveDisplayText } from '../../helpers/resolveDisplayText';

import withTranslate from '../with-translate';

export const Span = withTranslate(({ t, msg, text, className }) => {
  const displayText = resolveDisplayText(t, msg, text);
  return <span>{displayText}</span>;
});

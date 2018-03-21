import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

import { resolveDisplayText } from '../helpers/resolveDisplayText';

import withTranslate from './with-translate';

const Button = ({ t, msg, text, ...restProps }) => {
  const displayText = resolveDisplayText(t, msg, text);
  return <RaisedButton label={displayText} {...restProps} />;
};

Button.propTypes = {
  t: PropTypes.func.isRequired,
  msg: PropTypes.string,
  text: PropTypes.string,
  restProps: PropTypes.any
};

export default withTranslate(Button);

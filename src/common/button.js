import React from 'react';
import PropTypes from 'prop-types';
import { RaisedButton, FlatButton } from 'material-ui';

import { resolveDisplayText } from '../helpers/resolveDisplayText';

import withTranslate from './with-translate';

const Button = ({ t, msg, text, btnType, ...restProps }) => {
  const displayText = resolveDisplayText(t, msg, text);
  const ButtonElement = btnType === 'flat' ? FlatButton : RaisedButton;
  return <ButtonElement label={displayText} {...restProps} />;
};

Button.propTypes = {
  t: PropTypes.func.isRequired,
  msg: PropTypes.string,
  text: PropTypes.string,
  restProps: PropTypes.any,
  btnType: PropTypes.string
};

Button.defaultProps = {
  btnType: 'raised'
};

export default withTranslate(Button);

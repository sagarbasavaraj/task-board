import React from 'react';
import { string, func, object, node } from 'prop-types';
import { Dialog as MuiDialog } from 'material-ui';

import withTranslate from './with-translate';
import { resolveDisplayText } from '../helpers/resolveDisplayText';

const Dialog = ({ t, text, msg, headerComponent, children, ...restProps }) => {
  const displayText = resolveDisplayText(t, msg, text);
  return (
    <MuiDialog title={headerComponent || displayText} {...restProps}>
      {children}
    </MuiDialog>
  );
};

Dialog.propTypes = {
  t: func,
  text: string,
  msg: string,
  headerComponent: node,
  restProps: object,
  children: node
};

export default withTranslate(Dialog);

import React, { PureComponent } from 'react';
import { func, bool } from 'prop-types';
import { reduxForm } from 'redux-form';

import { Button, Dialog } from '../common';

class CreateTask extends PureComponent {
  static propTypes = {
    closeDialog: func,
    open: bool
  };

  render() {
    const { closeDialog, open } = this.props;
    const actions = [
      <Button
        msg="cancel"
        primary={true}
        btnType="flat"
        onClick={closeDialog}
      />,
      <Button
        msg="submit"
        primary={true}
        disabled={true}
        onClick={closeDialog}
        btnType="flat"
      />
    ];
    return (
      <Dialog
        msg="taskboard:addTask"
        actions={actions}
        modal={true}
        open={open}
        autoScrollBodyContent={true}
      >
        <form autoComplete="off">coming soon...</form>
      </Dialog>
    );
  }
}

export default reduxForm({ form: 'createTask' })(CreateTask);

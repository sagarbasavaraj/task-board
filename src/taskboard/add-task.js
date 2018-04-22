import React, { PureComponent } from 'react';
import { func, bool } from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import { Button, Dialog, RenderField } from '../common';

class AddTask extends PureComponent {
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
        modal
        open={open}
        autoScrollBodyContent
      >
        <form autoComplete="off">
          <Field
            name="title"
            fullWidth={true}
            label="taskboard:title"
            component={RenderField}
            type="text"
          />
          <Field
            name="description"
            fullWidth
            multiLine
            label="taskboard:description"
            component={RenderField}
            type="text"
            rowsMax={10}
          />
        </form>
      </Dialog>
    );
  }
}

export default reduxForm({ form: 'addTask' })(AddTask);

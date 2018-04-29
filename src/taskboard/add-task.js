import React, { PureComponent } from 'react';
import { func, bool } from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import { Button, Dialog, TextField, SelectField } from '../common';

const priorityOptions = [
  {
    label: 'taskboard:high',
    value: 'high'
  },
  {
    label: 'taskboard:medium',
    value: 'medium'
  },
  {
    label: 'taskboard:low',
    value: 'low'
  }
];

const statusOptions = [
  {
    label: 'taskboard:new',
    value: 'new'
  },
  {
    label: 'taskboard:inProgress',
    value: 'inProgress'
  },
  {
    label: 'taskboard:review',
    value: 'review'
  },
  {
    label: 'taskboard:complete',
    value: 'complete'
  }
];

class AddTask extends PureComponent {
  static propTypes = {
    closeDialog: func.isRequired,
    open: bool,
    onTaskSubmit: func.isRequired
  };

  constructor(props) {
    super(props);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.handleSubmitBtnClick = this.handleSubmitBtnClick.bind(this);
  }

  closeAndResetForm() {
    this.props.closeDialog();
    this.props.reset();
  }

  handleCloseDialog() {
    this.closeAndResetForm();
  }

  handleSubmitBtnClick(taskData) {
    this.props.onTaskSubmit(taskData);
    this.handleCloseDialog();
  }

  render() {
    const { open, pristine, submitting, handleSubmit } = this.props;
    const actions = [
      <Button
        msg="cancel"
        primary={true}
        btnType="flat"
        onClick={this.handleCloseDialog}
      />,
      <Button
        msg="submit"
        primary={true}
        disabled={pristine || submitting}
        btnType="flat"
        type="submit"
        onClick={handleSubmit(this.handleSubmitBtnClick)}
      />
    ];
    return (
      <Dialog
        msg="taskboard:addTask"
        actions={actions}
        open={open}
        autoScrollBodyContent
        modal={false}
        bodyClassName="l-add-task-dialog"
      >
        <form autoComplete="off">
          <Field
            name="title"
            fullWidth={true}
            label="taskboard:title"
            component={TextField}
            type="text"
          />
          <Field
            name="priority"
            label="taskboard:priority"
            component={SelectField}
            menuItems={priorityOptions}
          />
          <Field
            name="status"
            label="taskboard:status"
            component={SelectField}
            menuItems={statusOptions}
          />
          <Field
            name="description"
            fullWidth
            multiLine
            label="taskboard:description"
            component={TextField}
            type="text"
            rowsMax={10}
          />
        </form>
      </Dialog>
    );
  }
}

export default reduxForm({ form: 'addTask' })(AddTask);

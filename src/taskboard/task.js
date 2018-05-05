import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { func, bool, object, string } from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import { Button, Dialog, TextField, SelectField } from '../common';

const priorityOptions = [
  {
    label: 'taskboard:high',
    value: 'High'
  },
  {
    label: 'taskboard:medium',
    value: 'Medium'
  },
  {
    label: 'taskboard:low',
    value: 'Low'
  }
];

const statusOptions = [
  {
    label: 'taskboard:new',
    value: 'New'
  },
  {
    label: 'taskboard:inProgress',
    value: 'In Progress'
  },
  {
    label: 'taskboard:review',
    value: 'Review'
  },
  {
    label: 'taskboard:complete',
    value: 'Complete'
  }
];

const getTitle = actionType => {
  switch (actionType) {
    case 'add': {
      return 'taskboard:addTask';
    }
    case 'update': {
      return 'taskboard:updateTask';
    }
    default:
      return '';
  }
};

class Task extends PureComponent {
  static propTypes = {
    closeDialog: func.isRequired,
    open: bool,
    onTaskSubmit: func.isRequired,
    initialValues: object,
    actionType: string
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
    const { open, pristine, submitting, handleSubmit, actionType } = this.props;
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
        msg={getTitle(actionType)}
        actions={actions}
        open={open}
        autoScrollBodyContent
        modal={false}
        bodyClassName="l-task-dialog"
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

export default connect(state => {
  const { taskboard } = state;
  const { actionType, openTaskDialog, selectedTaskId } = taskboard;
  const initialValues =
    actionType === 'update' ? get(taskboard, `tasks.${selectedTaskId}`) : {};
  return {
    open: openTaskDialog,
    initialValues,
    actionType
  };
})(reduxForm({ form: 'Task', enableReinitialize: true })(Task));

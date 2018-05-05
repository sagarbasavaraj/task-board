import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { Container } from '../common';

import {
  toggleTaskDialog,
  startSetTask,
  setSelectedTaskId,
  deleteTask,
  startUpdateTask
} from '../reducers/actions/taskboard-actions';

import TaskboardHeader from './taskboard-header';
import Task from './task';
import NoTasks from './no-tasks';
import ViewTasks from './view-tasks';

import './taskboard.css';

class Taskboard extends Component {
  static propTypes = {
    taskboard: object.isRequired,
    dispatch: func.isRequired
  };

  constructor(props) {
    super(props);
    this.closeTaskDialog = this.closeTaskDialog.bind(this);
    this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
    this.handleTaskSelect = this.handleTaskSelect.bind(this);
    this.handleDeleteBtnClick = this.handleDeleteBtnClick.bind(this);
    this.handleAddBtnClick = this.handleAddBtnClick.bind(this);
    this.handleUpdateBtnClick = this.handleUpdateBtnClick.bind(this);
  }

  handleTaskSubmit(task) {
    const { taskboard } = this.props;
    const { actionType, selectedTaskId } = taskboard;
    if (actionType === 'add') {
      this.props.dispatch(startSetTask(task));
    } else if (actionType === 'update') {
      this.props.dispatch(startUpdateTask(selectedTaskId, task));
    }
  }

  handleAddBtnClick() {
    this.props.dispatch(toggleTaskDialog('add'));
  }

  handleUpdateBtnClick() {
    this.props.dispatch(toggleTaskDialog('update'));
  }

  closeTaskDialog(type) {
    this.props.dispatch(toggleTaskDialog());
  }

  handleTaskSelect(taskId) {
    this.props.dispatch(setSelectedTaskId(taskId));
  }

  handleDeleteBtnClick() {
    const { taskboard } = this.props;
    this.props.dispatch(deleteTask(taskboard.selectedTaskId));
  }

  render() {
    const { taskboard } = this.props;
    const { tasks, selectedTaskId } = taskboard;
    const tasksExist = !isEmpty(tasks);

    return (
      <Container>
        <TaskboardHeader
          onAddBtnClick={this.handleAddBtnClick}
          onDeleteBtnClick={this.handleDeleteBtnClick}
          disableDeleteBtn={!selectedTaskId}
          onUpdateBtnClick={this.handleUpdateBtnClick}
          disableUpdateBtn={!selectedTaskId}
        />
        <Task
          closeDialog={this.closeTaskDialog}
          onTaskSubmit={this.handleTaskSubmit}
        />
        {tasksExist ? (
          <ViewTasks
            tasks={tasks}
            onTaskSelect={this.handleTaskSelect}
            selectedTaskId={selectedTaskId}
          />
        ) : (
          <NoTasks />
        )}
      </Container>
    );
  }
}

export default connect(state => ({
  taskboard: state.taskboard
}))(Taskboard);

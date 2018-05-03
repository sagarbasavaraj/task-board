import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { Container } from '../common';

import {
  toggleTaskDialog,
  startSetTask,
  setSelectedTaskId,
  deleteTask
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
    this.toggleTaskDialog = this.toggleTaskDialog.bind(this);
    this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
    this.handleTaskSelect = this.handleTaskSelect.bind(this);
    this.handleDeleteBtnClick = this.handleDeleteBtnClick.bind(this);
  }

  handleTaskSubmit(task) {
    this.props.dispatch(startSetTask(task));
  }

  toggleTaskDialog() {
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
    const { openTaskDialog, tasks, selectedTaskId } = taskboard;
    const tasksExist = !isEmpty(tasks);

    return (
      <Container>
        <TaskboardHeader
          onAddBtnClick={this.toggleTaskDialog}
          onDeleteBtnClick={this.handleDeleteBtnClick}
          disableDeleteBtn={!selectedTaskId}
        />
        <Task
          open={openTaskDialog}
          closeDialog={this.toggleTaskDialog}
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

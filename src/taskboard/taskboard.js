import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { Container } from '../common';

import {
  toggleAddTaskDialog,
  startAddTask
} from '../reducers/actions/taskboard-actions';

import TaskboardHeader from './taskboard-header';
import AddTask from './add-task';
import NoTasks from './no-tasks';

import './taskboard.css';

class Taskboard extends Component {
  static propTypes = {
    taskboard: object.isRequired,
    dispatch: func.isRequired
  };

  constructor(props) {
    super(props);
    this.toggleAddTaskDialog = this.toggleAddTaskDialog.bind(this);
    this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
  }

  handleTaskSubmit(task) {
    this.props.dispatch(startAddTask(task));
  }

  toggleAddTaskDialog() {
    this.props.dispatch(toggleAddTaskDialog());
  }

  render() {
    const { taskboard } = this.props;
    const { openAddTaskDialog, tasks } = taskboard;
    const tasksExist = !isEmpty(tasks);

    return (
      <Container>
        <TaskboardHeader onAddBtnClick={this.toggleAddTaskDialog} />
        <AddTask
          open={openAddTaskDialog}
          closeDialog={this.toggleAddTaskDialog}
          onTaskSubmit={this.handleTaskSubmit}
        />
        {!tasksExist ? <NoTasks /> : null}
      </Container>
    );
  }
}

export default connect(state => ({
  taskboard: state.taskboard
}))(Taskboard);

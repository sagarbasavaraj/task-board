import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';

import { Container, Icon } from '../common';

import { taskboardActions } from '../reducers/actions/taskboard-actions';

import CreateTask from './create-task';
import './taskboard.css';

class Taskboard extends Component {
  static propTypes = {
    taskboard: object.isRequired,
    toggleCreateTaskDialog: func.isRequired
  };

  render() {
    const { taskboard, toggleCreateTaskDialog } = this.props;
    const { openCreateTaskDialog } = taskboard;
    return (
      <Container>
        <Icon
          className="align-right"
          name="add_circle"
          onClick={toggleCreateTaskDialog}
          style={{ fontSize: '48px', display: 'flex' }}
        />
        <CreateTask
          open={openCreateTaskDialog}
          closeDialog={toggleCreateTaskDialog}
        />
      </Container>
    );
  }
}

export default connect(
  state => ({
    taskboard: state.taskboard
  }),
  taskboardActions
)(Taskboard);

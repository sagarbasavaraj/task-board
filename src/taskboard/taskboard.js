import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';

import { Container, Icon } from '../common';

import { taskboardActions } from '../reducers/actions/taskboard-actions';

import AddTask from './add-task';
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
          className="l-add-icon"
          name="add_circle"
          onClick={toggleCreateTaskDialog}
          style={{ fontSize: '48px' }}
        />
        <AddTask
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

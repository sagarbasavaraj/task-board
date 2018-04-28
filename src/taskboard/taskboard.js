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
    toggleAddTaskDialog: func.isRequired
  };

  render() {
    const { taskboard, toggleAddTaskDialog } = this.props;
    const { openAddTaskDialog } = taskboard;
    return (
      <Container>
        <Icon
          className="l-add-icon"
          name="add_circle"
          onClick={toggleAddTaskDialog}
          style={{ fontSize: '48px' }}
        />
        <AddTask open={openAddTaskDialog} closeDialog={toggleAddTaskDialog} />
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

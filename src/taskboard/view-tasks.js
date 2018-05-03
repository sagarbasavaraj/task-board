import React, { Component } from 'react';
import { object, func, string } from 'prop-types';

import { Table } from '../common';

class ViewTasks extends Component {
  static propTypes = {
    tasks: object,
    onTaskSelect: func,
    selectedTaskId: string
  };

  constructor(props) {
    super(props);
    this.handleCellClick = this.handleCellClick.bind(this);
    this.handleRowSelection = this.handleRowSelection.bind(this);
  }

  handleCellClick(rowNumber, cellNumber, event) {
    const rowData = event.target.getAttribute('data-row-data');
    this.props.onTaskSelect(rowData);
  }

  handleRowSelection(selectedRows) {
    if (selectedRows && selectedRows.length === 0) {
      this.props.onTaskSelect(null);
    }
  }

  render() {
    const { tasks, selectedTaskId } = this.props;
    const headerItems = [
      { m: 'taskboard:title', key: 'title' },
      { m: 'taskboard:priority', key: 'priority' },
      { m: 'taskboard:status', key: 'status' },
      { m: 'taskboard:createdOn', key: 'createdOn' },
      { m: 'taskboard:description', key: 'description' }
    ];

    return (
      <Table
        headerItems={headerItems}
        tableData={tasks}
        selectable
        height="60vh"
        onCellClick={this.handleCellClick}
        onRowSelection={this.handleRowSelection}
        showCheckboxes={false}
        selectedRow={selectedTaskId}
        deselectOnClickaway={false}
      />
    );
  }
}

export default ViewTasks;

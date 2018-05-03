import React from 'react';
import {
  Table,
  TableBody,
  TableHeaderColumn,
  TableRow,
  TableHeader,
  TableRowColumn
} from 'material-ui/Table';
import { map } from 'lodash';

import { resolveDisplayText } from '../helpers/resolveDisplayText';
import withTranslate from './with-translate';

const renderTableHeaderColumns = (t, headerItems) => {
  return map(headerItems, column => {
    const resolvedText = resolveDisplayText(t, column.m || column.t);
    return (
      <TableHeaderColumn key={resolvedText}>{resolvedText}</TableHeaderColumn>
    );
  });
};

const renderTableRowColumn = (headerItems, tableData, selectedRow) => {
  return map(tableData, (data, key) => {
    return (
      <TableRow key={key} selected={selectedRow === key}>
        {map(headerItems, header => (
          <TableRowColumn
            key={`${data.id} ${header.key}`}
            data-row-data={`${data.id}`}
          >
            {data[header.key]}
          </TableRowColumn>
        ))}
      </TableRow>
    );
  });
};

const CustomTabel = ({
  t,
  className,
  height,
  selectable,
  multiSelectable,
  displaySelectAll,
  adjustForCheckbox,
  enableSelectAll,
  headerItems,
  deselectOnClickaway,
  tableData,
  showRowHover,
  stripedRows,
  showCheckboxes,
  onCellClick,
  onRowSelection,
  selectedRow
}) => {
  return (
    <div className={className}>
      <Table
        height={height}
        selectable={selectable}
        multiSelectable={multiSelectable}
        onCellClick={onCellClick}
        onRowSelection={onRowSelection}
      >
        <TableHeader
          displaySelectAll={showCheckboxes}
          adjustForCheckbox={showCheckboxes}
          enableSelectAll={enableSelectAll}
        >
          <TableRow>{renderTableHeaderColumns(t, headerItems)}</TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={showCheckboxes}
          deselectOnClickaway={deselectOnClickaway}
          showRowHover={showRowHover}
          stripedRows={stripedRows}
        >
          {renderTableRowColumn(headerItems, tableData, selectedRow)}
        </TableBody>
      </Table>
    </div>
  );
};

export default withTranslate(CustomTabel);

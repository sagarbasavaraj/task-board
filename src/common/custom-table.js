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

const renderTableRowColumn = (headerItems, tableData) => {
  return map(tableData, data => {
    return (
      <TableRow key={data.id}>
        {map(headerItems, header => (
          <TableRowColumn key={`${data.id} ${header.key}`}>
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
  showCheckboxes
}) => {
  return (
    <div className={className}>
      <Table
        height={height}
        selectable={selectable}
        multiSelectable={multiSelectable}
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
          {renderTableRowColumn(headerItems, tableData)}
        </TableBody>
      </Table>
    </div>
  );
};

export default withTranslate(CustomTabel);

import React from 'react';
import { func, bool } from 'prop-types';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

import { Button, Icon } from '../common';

const TaskboardHeader = ({
  onAddBtnClick,
  onDeleteBtnClick,
  onUpdateBtnClick,
  disableDeleteBtn,
  disableUpdateBtn
}) => {
  return (
    <Toolbar>
      <ToolbarGroup firstChild={true}>
        <Button
          className="l-btn"
          msg="taskboard:create"
          primary={true}
          onClick={onAddBtnClick}
          icon={<Icon name="add" />}
        />
        <Button
          className="l-btn"
          msg="taskboard:delete"
          primary={true}
          onClick={onDeleteBtnClick}
          disabled={disableDeleteBtn}
          icon={<Icon name="delete" />}
        />
        <Button
          className="l-btn"
          msg="taskboard:update"
          primary={true}
          onClick={onUpdateBtnClick}
          disabled={disableUpdateBtn}
          icon={<Icon name="edit" />}
        />
      </ToolbarGroup>
    </Toolbar>
  );
};

TaskboardHeader.propTypes = {
  onAddBtnClick: func.isRequired,
  onDeleteBtnClick: func.isRequired,
  disableDeleteBtn: bool,
  onUpdateBtnClick: func.isRequired,
  disableUpdateBtn: bool
};

export default TaskboardHeader;

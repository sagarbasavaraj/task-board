import React from 'react';
import { func, bool } from 'prop-types';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

import { Button, Icon } from '../common';

const TaskboardHeader = ({
  onAddBtnClick,
  onDeleteBtnClick,
  disableDeleteBtn
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
      </ToolbarGroup>
    </Toolbar>
  );
};

TaskboardHeader.propTypes = {
  onAddBtnClick: func.isRequired,
  onDeleteBtnClick: func.isRequired,
  disableDeleteBtn: bool
};

export default TaskboardHeader;

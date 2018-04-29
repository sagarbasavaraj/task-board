import React from 'react';
import { func } from 'prop-types';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

import { Button } from '../common';

const TaskboardHeader = ({ onAddBtnClick }) => {
  return (
    <Toolbar>
      <ToolbarGroup firstChild={true}>
        <Button
          className="l-add-btn"
          msg="taskboard:addTask"
          primary={true}
          onClick={onAddBtnClick}
        />
      </ToolbarGroup>
    </Toolbar>
  );
};

TaskboardHeader.propTypes = {
  onAddBtnClick: func.isRequired
};

export default TaskboardHeader;

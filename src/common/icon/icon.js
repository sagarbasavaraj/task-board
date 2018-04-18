import React from 'react';
import { string, object, func } from 'prop-types';
import classnames from 'classnames';
import FontIcon from 'material-ui/FontIcon';

const Icon = ({ name, hoverColor, style, className, color, onClick }) => {
  const iconClassName = classnames('material-icons', {
    [className]: className
  });
  return (
    <FontIcon
      className={iconClassName}
      color={color}
      style={style}
      hoverColor={hoverColor}
      onClick={onClick}
    >
      {name}
    </FontIcon>
  );
};

Icon.propTypes = {
  style: object,
  hoverColor: string,
  className: string,
  color: string,
  name: string,
  onClick: func
};

export default Icon;

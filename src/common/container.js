import React from 'react';
import { string, node } from 'prop-types';
import classnames from 'classnames';

const Container = ({ className, children }) => {
  const containerClassName = classnames('container', {
    [className]: typeof className !== 'undefined'
  });

  return <div className={containerClassName}>{children}</div>;
};

Container.propTypes = {
  className: string,
  children: node
};

export default Container;

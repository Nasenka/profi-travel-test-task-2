import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import style from './Button.module.scss';

function Button({ children, type, isActive, ...props }) {
  return (
    <button
      {...props}
      className={classnames(style[type], { [style.active]: isActive })}
      type="button"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  isActive: false,
  type: 'default',
};

export default Button;

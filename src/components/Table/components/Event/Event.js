import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Button from '../../../Button';

function Event({ children }) {
  const [isAdded, setIsAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsAdded(!isAdded);
  };

  const renderText = () => {
    if (isAdded) {
      return isHovered ? 'Убрать' : 'В календаре';
    }

    return 'Добавить в календарь';
  };

  return (
    <>
      {children}
      <Button
        isActive={isAdded}
        type="circle"
        onClick={handleClick}
        onMouseLeave={() => setIsHovered(false)}
        onMouseOver={() => setIsHovered(true)}
      >
        {renderText()}
      </Button>
    </>
  );
}

Event.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Event;

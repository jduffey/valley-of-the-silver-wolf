import React from 'react';

const ActionButton = ({
  text,
  onClick,
  isDisabled
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default ActionButton;

import React from 'react';

const MoveButton = ({
  text,
  onClick
}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

export default MoveButton;

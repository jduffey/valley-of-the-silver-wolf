import React from 'react';

const CircularRing = ({
  playerCircleIndex,
  playerHealth
}) => {
  const ringSize = 400;
  const circleSize = 40;
  const numberOfCircles = 10;

  const renderCircles = () => {
    const circles = [];
    for (let i = 0; i < numberOfCircles; i++) {
      const angle = (i / numberOfCircles) * 2 * Math.PI;
      const x = Math.cos(angle) * (ringSize / 2 - circleSize / 2) + (ringSize / 2);
      const y = Math.sin(angle) * (ringSize / 2 - circleSize / 2) + (ringSize / 2);

      const HEALTHY_PLAYER_COLOR = 'green';
      const INJURED_PLAYER_COLOR = 'orange';
      const playerColor = playerHealth === 'HEALTHY' ? HEALTHY_PLAYER_COLOR : INJURED_PLAYER_COLOR;
      const fillColor = i === playerCircleIndex ? playerColor : 'white';
      const OTHER_PLAYER_POS_INDEX = 1;
      const strokeColor = i === OTHER_PLAYER_POS_INDEX ? 'red' : 'black';

      circles.push(
        <circle
          key={i}
          cx={x}
          cy={y}
          r={circleSize / 2}
          fill={fillColor}
          strokeWidth={2}
          stroke={strokeColor}
        />
      );
    }
    return circles;
  };

  return (
    <svg width={ringSize} height={ringSize}>
      <circle
        cx={ringSize / 2}
        cy={ringSize / 2}
        r={ringSize / 2 - circleSize / 2}
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      {renderCircles()}
    </svg>
  );
};

export default CircularRing;
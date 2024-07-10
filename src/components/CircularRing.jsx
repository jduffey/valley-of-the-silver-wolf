import React from 'react';

const CircularRing = ({ greenCircleIndex }) => {
  const ringSize = 400;
  const circleSize = 40;
  const numberOfCircles = 10;

  const renderCircles = () => {
    const circles = [];
    for (let i = 0; i < numberOfCircles; i++) {
      const angle = (i / numberOfCircles) * 2 * Math.PI;
      const x = Math.cos(angle) * (ringSize / 2 - circleSize / 2) + (ringSize / 2);
      const y = Math.sin(angle) * (ringSize / 2 - circleSize / 2) + (ringSize / 2);

      const fillColor = i === greenCircleIndex ? 'green' : 'white';

      circles.push(
        <circle
          key={i}
          cx={x}
          cy={y}
          r={circleSize / 2}
          fill={fillColor}
          stroke="black"
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
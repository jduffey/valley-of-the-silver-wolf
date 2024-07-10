import './App.css';
import React, { useState } from 'react';

import CircularRing from './components/CircularRing';
import GameTitle from './components/GameTitle';
import MoveButton from './components/MoveButton';
import ActionButton from './components/ActionButton';

function App() {

  const [playerCircleIndex, setPlayerCircleIndex] = useState(0);
  const [playerHealth, setPlayerHealth] = useState("HEALTHY");

  const TOTAL_AREAS = 10;
  const handleClockwiseMovement = () => {
    setPlayerCircleIndex(prevIndex => (prevIndex + 1) % TOTAL_AREAS);
  };
  const handleCounterClockwiseMovement = () => {
    setPlayerCircleIndex(prevIndex => {
      return prevIndex === 0 ? TOTAL_AREAS - 1 : prevIndex - 1;
    });
  }
  const handleFightButtonClick = () => {
    setPlayerHealth("INJURED");
  }

  return (
    <div className="App">
      <header className="App-header">
        <GameTitle />
        <CircularRing
          playerCircleIndex={playerCircleIndex}
          playerHealth={playerHealth}
        />
        <MoveButton
          text="Move Clockwise"
          onClick={handleClockwiseMovement}
        />
        <MoveButton
          text="Move Counter-Clockwise"
          onClick={handleCounterClockwiseMovement}
        />
        <ActionButton
          text="Fight"
          onClick={handleFightButtonClick}
        />
      </header>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';

import CircularRing from './components/CircularRing';
import GameTitle from './components/GameTitle';
import MoveButton from './components/MoveButton';

function App() {

  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const TOTAL_AREAS = 10;
  const handleClockwiseMovement = () => {
    setCurrentPlayerIndex(prevIndex => (prevIndex + 1) % TOTAL_AREAS);
  };
  const handleCounterClockwiseMovement = () => {
    setCurrentPlayerIndex(prevIndex => {
      return prevIndex === 0 ? TOTAL_AREAS - 1 : prevIndex - 1;
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <GameTitle />
        <CircularRing
          greenCircleIndex={currentPlayerIndex}
        />
        <MoveButton
          text="Move Clockwise"
          onClick={handleClockwiseMovement}
        />
        <MoveButton
          text="Move Counter-Clockwise"
          onClick={handleCounterClockwiseMovement}
        />
      </header>
    </div>
  );
}

export default App;

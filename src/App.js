import './App.css';
import React, { useState } from 'react';

import WorldMap from './components/WorldMap';
import GameTitle from './components/GameTitle';
import MoveButton from './components/MoveButton';
import ActionButton from './components/ActionButton';

function App() {

  const [playerCircleIndex, setPlayerCircleIndex] = useState(0);
  const [enemyCircleIndex, setEnemyCircleIndex] = useState(1);
  const [playerHealth, setPlayerHealth] = useState("HEALTHY");
  const [isFightButtonDisabled, setIsFightButtonDisabled] = useState(true);

  const TOTAL_AREAS = 10;
  const handleClockwiseMovement = () => {
    setPlayerCircleIndex(prevIndex => {
      const newIndex = (prevIndex + 1) % TOTAL_AREAS;
      setIsFightButtonDisabled(newIndex !== enemyCircleIndex);
      return newIndex;
    });
  };
  const handleCounterClockwiseMovement = () => {
    setPlayerCircleIndex(prevIndex => {
      const newIndex = (prevIndex - 1 + TOTAL_AREAS) % TOTAL_AREAS;
      setIsFightButtonDisabled(newIndex !== enemyCircleIndex);
      return newIndex;
    });
  }
  const handleFightButtonClick = () => {
    setPlayerHealth("INJURED");
  }

  return (
    <div className="App">
      <header className="App-header">
        <GameTitle />
        <WorldMap
          playerCircleIndex={playerCircleIndex}
          playerHealth={playerHealth}
          enemyCircleIndex={enemyCircleIndex}
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
          isDisabled={isFightButtonDisabled}
        />
      </header>
    </div>
  );
}

export default App;

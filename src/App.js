import './App.css';
import React, { useState } from 'react';

import CircularRing from './components/CircularRing';
import GameTitle from './components/GameTitle';
import MoveButton from './components/MoveButton';

function App() {

  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const handleMoveButtonClick = () => {
    const TOTAL_AREAS = 10;
    setCurrentPlayerIndex(prevIndex => (prevIndex + 1) % TOTAL_AREAS);
  };

  return (
    <div className="App">
      <header className="App-header">
        <GameTitle />
        <CircularRing
          greenCircleIndex={currentPlayerIndex}
        />
        <MoveButton
          onClick={handleMoveButtonClick}
        />
      </header>
    </div>
  );
}

export default App;

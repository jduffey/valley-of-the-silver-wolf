import './App.css';
import React, { useState } from 'react';

import WorldMap from './components/WorldMap';
import GameTitle from './components/GameTitle';
import MoveButton from './components/MoveButton';
import ActionButton from './components/ActionButton';
import PlayerInfo from './components/PlayerInfo';

function App() {

  const [playerCircleIndex, setPlayerCircleIndex] = useState(0);
  const [enemyCircleIndex, setEnemyCircleIndex] = useState(1);
  const [playerHealth, setPlayerHealth] = useState("HEALTHY");
  const [playerReputation, setPlayerReputation] = useState(2);
  const [isFightButtonDisabled, setIsFightButtonDisabled] = useState(true);
  const [isHealButtonDisabled, setIsHealButtonDisabled] = useState(true);

  const TOTAL_AREAS = 10;

  const updateButtons = (newIndex, enemyCircleIndex, playerHealth) => {
    setIsFightButtonDisabled(newIndex !== enemyCircleIndex || playerHealth === "INJURED");
    setIsHealButtonDisabled(newIndex % 2 === 1 || playerHealth === "HEALTHY");
  }

  const didPlayerWinFight = () => {
    return false;
  }

  const handleMoveButton = (direction) => {
    setPlayerCircleIndex(prevIndex => {
      const newIndex = (prevIndex + direction + TOTAL_AREAS) % TOTAL_AREAS;

      updateButtons(newIndex, enemyCircleIndex, playerHealth);

      return newIndex;
    });
  }

  const handleFightButtonClick = () => {
    if (didPlayerWinFight()) {
      console.log("Player won the fight!");
      setPlayerHealth("HEALTHY");
      setPlayerReputation(prevReputation => Math.min(prevReputation + 1, 5));
    } else {
      console.log("Player lost the fight!");
      setPlayerHealth("INJURED");
      setPlayerReputation(prevReputation => Math.max(prevReputation - 1, 1));
      setIsFightButtonDisabled(true);
    }
  }
  const handleHealButtonClick = () => {
    setPlayerHealth(() => {
      setIsHealButtonDisabled(true);
      return "HEALTHY";
    });
  }

  const getReputationColor = () => {
    if (playerReputation === 5) {
      return 'gold';
    } else if (playerReputation === 3 || playerReputation === 4) {
      return '#8b4614';
    } else {
      return 'black';
    }
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
        <div style={{
          marginBottom: '10px',
          border: '1px solid black',
          borderRadius: '20px',
          padding: '10px',
        }}>
          <MoveButton
            text="Move Clockwise"
            onClick={handleMoveButton.bind(null, 1)}
          />
          <MoveButton
            text="Move Counter-Clockwise"
            onClick={handleMoveButton.bind(null, -1)}
          />
          <ActionButton
            text="Fight"
            onClick={handleFightButtonClick}
            isDisabled={isFightButtonDisabled}
          />
          <ActionButton
            text="Heal"
            onClick={handleHealButtonClick}
            isDisabled={isHealButtonDisabled}
          />
        </div>
        <PlayerInfo
          playerCircleIndex={playerCircleIndex}
          enemyCircleIndex={enemyCircleIndex}
          playerHealth={playerHealth}
          playerReputation={playerReputation}
          reputationColor={getReputationColor()}
        />
      </header>
    </div>
  );
}

export default App;

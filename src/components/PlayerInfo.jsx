const PlayerInfo = ({
  playerCircleIndex,
  enemyCircleIndex,
  playerHealth,
  playerReputation,
}) => {
  return (
    <div className="player-info">
      <div>Player Circle Index: {playerCircleIndex}</div>
      <div>Enemy Circle Index: {enemyCircleIndex}</div>
      <div>Player Health: {playerHealth}</div>
      <div>Player Reputation: {playerReputation}</div>
    </div>
  );
}

export default PlayerInfo;

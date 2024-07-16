const PlayerInfo = ({
  playerCircleIndex,
  enemyCircleIndex,
  playerHealth,
  playerReputation,
  reputationColor
}) => {
  return (
    <div className="player-info">
      <div>Player Circle Index: {playerCircleIndex}</div>
      <div>Enemy Circle Index: {enemyCircleIndex}</div>
      <div>Player Health: {playerHealth}</div>
      <div>Player Reputation: {playerReputation}</div>
      <div
        style={{
          width: '150px',
          height: '20px',
          backgroundColor: reputationColor,
          borderRadius: '4px',
        }}
      ></div>
    </div>
  );
}

export default PlayerInfo;

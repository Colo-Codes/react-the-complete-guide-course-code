export default function GameOver({ winner, onRestart, players }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && (
        <p>
          {players[winner]} won using {winner}!
        </p>
      )}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}

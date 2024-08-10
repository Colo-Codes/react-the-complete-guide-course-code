import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const PLAYER_SYMBOLS = {
  1: "⚛️",
  2: "☕️",
};
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const checkWinner = (gameBoard) => {
  let winner = null;
  for (const winningCombination of WINNING_COMBINATIONS) {
    const firstSymbol =
      gameBoard[winningCombination[0].row][winningCombination[0].col];
    const secondSymbol =
      gameBoard[winningCombination[1].row][winningCombination[1].col];
    const thirdSymbol =
      gameBoard[winningCombination[2].row][winningCombination[2].col];

    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
      winner = firstSymbol;
    }
  }

  return winner;
};

const setActivePlayer = (logEvents) => {
  let activePlayer = 1;

  if (logEvents[0]?.player === 1) {
    activePlayer = 2;
  }

  return activePlayer;
};

const setGameBoard = (logEvents) => {
  // Make a copy of the INITIAL_GAME_BOARD so we are not referencing that array,
  // especially when restarting the game
  const gameBoard = INITIAL_GAME_BOARD.map((row) => [...row]);

  for (const event of logEvents) {
    gameBoard[event.row][event.col] = event.symbol;
  }

  return gameBoard;
};

function App() {
  const [logEvents, setLogEvents] = useState([]);
  const [players, setPlayers] = useState({
    [PLAYER_SYMBOLS[1]]: "Player 1",
    [PLAYER_SYMBOLS[2]]: "Player 2",
  });

  const activePlayer = setActivePlayer(logEvents);
  const gameBoard = setGameBoard(logEvents);
  const winner = checkWinner(gameBoard);
  const hasDraw = logEvents.length === 9 && !winner;

  const handleSelectSquare = (rowIndex, columnIndex) => {
    setLogEvents((prevLogEvents) => {
      const currentPlayer = setActivePlayer(prevLogEvents);
      const newLogEvents = [...prevLogEvents];
      newLogEvents.unshift({
        player: currentPlayer,
        symbol: PLAYER_SYMBOLS[currentPlayer],
        row: rowIndex,
        col: columnIndex,
      });

      return newLogEvents;
    });
  };

  const handleRestart = () => {
    setLogEvents([]);
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol={PLAYER_SYMBOLS[1]}
            isActivePlayer={activePlayer === 1}
            setPlayers={setPlayers}
          />
          <Player
            name="Player 2"
            symbol={PLAYER_SYMBOLS[2]}
            isActivePlayer={activePlayer === 2}
            setPlayers={setPlayers}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver
            winner={winner}
            onRestart={handleRestart}
            players={players}
          />
        )}
        <GameBoard
          gameBoard={gameBoard}
          handleSelectSquare={handleSelectSquare}
        />
      </div>
      <Log logEvents={logEvents} />
    </main>
  );
}

export default App;

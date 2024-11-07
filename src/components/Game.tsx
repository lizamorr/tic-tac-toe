import React, { useState } from 'react';

import { Board } from './Board';

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isPlayerOne, setIsPlayerOne] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  const handleClick = (squareIndex: number) => {
    if (squares[squareIndex] || winner) return;

    const newSquares = squares.slice();
    newSquares[squareIndex] = isPlayerOne ? "X" : "O";
    setSquares(newSquares);
    setIsPlayerOne(!isPlayerOne);

    const newWinner = checkForWinner(newSquares);
    if (newWinner) {
      setWinner(newWinner);
    }
  };

  const checkForWinner = (newSquares: (string | null)[]) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (
        newSquares[a] &&
        newSquares[a] === newSquares[b] &&
        newSquares[a] === newSquares[c]
      ) {
        return newSquares[a];
      }
    }

    return null;
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setIsPlayerOne(true);
  };

  return (
    <div className="game">
      {winner ? (
        <div className="reset">
          <p>The winner is {winner}</p>
          <button onClick={resetGame}>Reset Game</button>
        </div>
      ) : (
        <div>
          {squares.every((sq) => !!sq) ? (
            <div className="reset">
              <p>No winner, play again!</p>
              <button onClick={resetGame}>Reset Game</button>
            </div>
          ) : (
            <p>Player turn: {isPlayerOne ? "X" : "O"}</p>
          )}
        </div>
      )}
      <Board squares={squares} onClick={handleClick} />
    </div>
  );
}

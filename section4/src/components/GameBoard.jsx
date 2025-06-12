import React, { useState } from 'react'

export default function GameBoard({ onSelectSquare, board }) {
	// Problemet med denna approarch är att vi inte vill ha information om spel-data på flera ställen

	// const [gameBoard, setGameBoard] = useState(initialGameBoard);

	// function handleSelectSquare(rowIndex, colIndex) {
	// 	setGameBoard(prevBoard => {
	// 		const updatedBoard = [...prevBoard].map(innerArray => [...innerArray]); 
	// 		updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
	// 		return updatedBoard
	// 	});

	// 	onSelectSquare();
	// }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

import React, { useState } from 'react'

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
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

	let gameBoard = initialGameBoard;

	for (const turn of turns) { 
		const { square, player } = turn;
		const { row, col } = square;

		gameBoard[row][col] = player;
	}

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
						{row.map((playerSymbol, colIndex) => 
							<li key={colIndex}>
								<button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
							</li>
						)}
					</ol>
        </li>
      ))}
    </ol>
  );
}

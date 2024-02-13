import React, { useState } from "react";


export default function GameBoard({ onSelectSquare, board }) {


//   const [gameBoard, setGameBoard] = useState(initialGameBoard);

//   function handleSelectSquare(rowIndex, colIndex) {
//     setGameBoard((prevGameBoard) => {
//       const updatedBoard = prevGameBoard.map((row) => [...row]);
//       updatedBoard[rowIndex][colIndex] = activeplayerSymbol;
//       return updatedBoard;
//     });
//     onSelectSquare(rowIndex, colIndex);
//   }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button disabled={playerSymbol !== null} onClick={() => onSelectSquare(rowIndex, colIndex)}>
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

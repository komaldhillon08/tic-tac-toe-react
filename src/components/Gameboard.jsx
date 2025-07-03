// import the hooks 
import { useState } from "react";

const initiaGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({onSelectSquare , activePlayerSymbol}) {
    const [GameBoard, setGameBoard] = useState(initiaGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        console.log(">>>>>>>>row",rowIndex);
        console.log(">>>>>>>col",colIndex);
        
        setGameBoard((prevGameBoard) => {
            const updateBoard = [...prevGameBoard.map((innerArray) => [...innerArray])]
            updateBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updateBoard;
        })
        onSelectSquare();
    }

return (
    <ol id="game-board">
        {GameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => (
                    <li key={colIndex}>
                        <button onClick={() => handleSelectSquare(rowIndex ,colIndex )}>{playerSymbol}</button>
                    </li>
                ))}
            </ol>
        </li>)}
    </ol>
);
}
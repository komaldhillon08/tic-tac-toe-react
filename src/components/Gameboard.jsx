// import the hooks 
import { useState } from "react";

const initiaGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard() {
    const [GameBoard, setGameBoard] = useState(initiaGameBoard);

    function handleSelectSquae(rowIndex, colIndex) {
        console.log(">>>>>>>>row",rowIndex);
        console.log(">>>>>>>col",colIndex);
        
        setGameBoard((prevGameBoard) => {
            const updateBoard = [...prevGameBoard.map((innerArray) => [...innerArray])]
            updateBoard[rowIndex][colIndex] = 'X';
            return updateBoard;
        })
    }

return (
    <ol id="game-board">
        {GameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => (
                    <li key={colIndex}>
                        <button onClick={() => handleSelectSquae(rowIndex ,colIndex )}>{playerSymbol}</button>
                    </li>
                ))}
            </ol>
        </li>)}
    </ol>
);
}
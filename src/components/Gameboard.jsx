const initiaGameBoard = [
    [null ,null, null],
    [null ,null, null],
    [null ,null, null]
]
export default function GameBoard() {
    return (
        <ol id="game-board">
            {initiaGameBoard.map((row , rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}> <button>{playerSymbol}</button></li> )}
                </ol>
            </li> )}
        </ol>
    );
}
import { useState } from 'react'
import Players from './components/PlayersInfo.jsx'
import GameBoard from './components/Gameboard.jsx'
import Log from './components/Log.jsx'
import { WINNING_COMBINATIONS } from './winning.js'

// li grid 
const initiagameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]




// Determine active player based on last move
// X and O function 
function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X'
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    console.log("check");
    currentPlayer = 'O'
  }
  return currentPlayer

}


function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const[hasWinner , setHasWinner] = useState(false)
  // active player hook
  // const [activePlayer, setActivePlayer] = useState("X");
  const activePlayer = deriveActivePlayer(gameTurns);


  let gameBoard = initiagameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square

    gameBoard[row][col] = player;
  }

  let winner ;

  for (const combination of WINNING_COMBINATIONS) {
    console.log("comb", combination, gameBoard)
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
    const thridSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thridSquareSymbol) {
      console.log("combinations", {firstSquareSymbol, secondSquareSymbol, thridSquareSymbol})
      winner = firstSquareSymbol;
    }
  }


  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X")
    setGameTurns((preTurns) => {
      const currentPlayer = deriveActivePlayer(preTurns)

      const updateTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...preTurns];
      return updateTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        {/* PLAYERS */}
        <ol id="players" className='highlight-player'>
          <Players initiaName="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Players initiaName="Player 2" symbol="0" isActive={activePlayer === "O"} />
        </ol>
        {winner && <p>you won {winner} !</p>}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          // activePlayerSymbol={activePlayer}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}
export default App

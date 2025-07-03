import { useState } from 'react'
import Players from './components/PlayersInfo.jsx'
import GameBoard from './components/Gameboard.jsx'
import Log from './components/Log.jsx'

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // active player hook
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X")
    setGameTurns((preTurns) => {
      let currentPlayer = 'X'
      if (preTurns.length > 0 && preTurns[0].player === "X") {
        console.log("check");
        currentPlayer = 'O'
      }
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
        <GameBoard
          onSelectSquare={handleSelectSquare}
          // activePlayerSymbol={activePlayer}
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}
export default App

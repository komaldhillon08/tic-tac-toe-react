import { useState } from 'react'
import Players from './components/PlayersInfo.jsx'
import GameBoard from './components/Gameboard.jsx'
function App() {
  // active player hook
  const [activePlayer,setActivePlayer] = useState("X");
function handleSelectSquare() {
  setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X" )
}

  return (
    <main>
      <div id="game-container">
        {/* PLAYERS */}
        <ol id="players" className='highlight-player'>
          <Players initiaName="Player 1" symbol="X" isActive={activePlayer === "X"}/>
          <Players initiaName="Player 2" symbol="0" isActive={activePlayer === "O"} />

        </ol>



        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>

    </main>
  )
}

export default App

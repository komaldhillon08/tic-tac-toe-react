import Players from './components/PlayersInfo.jsx'
import GameBoard  from './components/Gameboard.jsx'
function App() {

  return (
    <main>
      <div id="game-container">
        {/* PLAYERS */}
        <ol id="players">
        <Players initiaName="Player 1" symbol="X" />
        <Players initiaName="Player 2" symbol="0" />

        </ol>



        <GameBoard/>
      </div>

    </main>
  )
}

export default App

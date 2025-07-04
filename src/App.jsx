import { useState } from 'react'
import Players from './components/PlayersInfo.jsx'
import GameBoard from './components/Gameboard.jsx'
import Log from './components/Log.jsx'
import { WINNING_COMBINATIONS } from './winning.js'
import GameOver from './components/GameOver.jsx'

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}


// li grid 
const initiagameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
// console.log(">>>>>>>>>>>>>>>>>>in",initiagameBoard);




// Determine active player based on last move
// X and O function 
function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X'
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    // console.log("check");
    currentPlayer = 'O'
  }
  return currentPlayer

}

function deriveGameBoard(gameTurns) {
  // let gameBoard = initiagameBoard;
  let gameBoard = [...initiagameBoard.map((array) => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square
    gameBoard[row][col] = player;
  }
  return gameBoard
}

function deriveWinner(gameBoard, players) {

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    // console.log("comb", combination, gameBoard)
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
    const thridSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thridSquareSymbol) {
      // console.log("combinations", { firstSquareSymbol, secondSquareSymbol, thridSquareSymbol })
      // winner = firstSquareSymbol;
      winner = players[firstSquareSymbol]
    }
  }
  return winner;
}


function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  // const[hasWinner , setHasWinner] = useState(false)
  // active player hook
  // const [activePlayer, setActivePlayer] = useState("X");
  const activePlayer = deriveActivePlayer(gameTurns);



  //call the deriveGameBoard 
  const gameBoard = deriveGameBoard(gameTurns);
  // call the winner function here 
  const winner = deriveWinner(gameBoard, players)



  //draw 
  const hasDraw = gameTurns.length === 9 && !winner

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X")
    setGameTurns((preTurns) => {
      const currentPlayer = deriveActivePlayer(preTurns)

      const updateTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...preTurns];
      return updateTurns;
    });
  }

  // reset function
  function hamdleReset() {
    setGameTurns([]);
  }

  // change player name and win player anem, show in UI
  function handlePlayerNamechange(symbol, newName) {
    setPlayers(prevPlayer => {
      return {
        ...prevPlayer,
        [symbol]: newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        {/* PLAYERS */}
        <ol id="players" className='highlight-player'>
          <Players
            initiaName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNamechange}
          />
          <Players
            initiaName={PLAYERS.O}
            symbol="0"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNamechange}

          />
        </ol>
        {/* {winner && <p>you won {winner} !</p>} */}
        {/* {winner && <GameOver winner={winner} />} */}
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={hamdleReset} />}
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

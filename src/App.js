import { useState } from "react";
import Board from "./components/Board";
import GameStats from "./components/GameStats";
import axios from "axios";



function App() {
    const [board, setBoard] = useState({});
    const [isFinished, setIsFinished] = useState(false);
    const [stats, setGameStats] = useState({});

    const handleClick = async (event) => {
        console.log('clicked');
        var response = await axios.get('http://localhost:5248/game')
        updateGameState(response.data);

    }

    const updateGameState = (gameState) => {
        console.log('newGameStateReceived:', gameState);
        setIsFinished(gameState.isFinished);
        setBoard(gameState.board);
        setGameStats(gameState.stats);
    }
    
    const handlePointClick = async (pointId) => {
        var response = await axios.post('http://localhost:5248/game', {
            pointId
        });
        updateGameState(response.data);
    }

    return (
        <div>
            App component
            <button onClick={handleClick}>Start</button>
            <Board board={board} handlePointClick={handlePointClick}/>
            <GameStats stats={stats}/>
        </div>
    );
}

export default App;
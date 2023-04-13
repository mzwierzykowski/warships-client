import './App.css';
import { useState } from "react";
import Board from "./components/Board";
import GameStats from "./components/GameStats";
import axios from "axios";



function App() {
    const [boardPoints, setBoardPoints] = useState([]);
    const [boardDimension, setBoardDimension] = useState({width: 0, height: 0});
    const [isFinished, setIsFinished] = useState(false);
    const [stats, setGameStats] = useState({shipStats: [], shotsFired:0, totalHits:0, totalMiss:0});

    const handleClick = async () => {
        var response = await axios.get('http://localhost:5248/game')
        updateGameState(response.data);

    }

    const updateGameState = (gameState) => {
        console.log('newGameStateReceived:', gameState);
        setIsFinished(gameState.isFinished);
        setBoardPoints(gameState.board.points);
        setBoardDimension(gameState.board.dimension)
        setGameStats(gameState.stats);
    }
    
    const handlePointClick = async (pointId) => {
        if(!isFinished) {
            var response = await axios.post('http://localhost:5248/game', {
                pointId
            });
            updateGameState(response.data);
        }
    }

    return (
        <div>
            <button className="new-game-button" onClick={handleClick}>New game</button>
            <div className="game-components">
                <Board dimension={boardDimension} points={boardPoints} handlePointClick={handlePointClick}/>
                <GameStats stats={stats}/>
            </div>
        </div>
    );
}

export default App;
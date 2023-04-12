import './GameStats.css'

function GameStats({stats}) {
    const shipStats = stats.shipStats.map((shipStat) => {
        return (<div className="ship-stat" key={shipStat.type}>
            <p className="ship-type">{shipStat.type}: {shipStat.leftInGameCount}/{shipStat.totalCount}</p>
        </div>);
    });
    return (
        <div className="game-stats-container">
            <div className="ship-stats">
                {shipStats}
            </div>
            <div className="game-counters">
                <p className="shots-fired-counter">Shoots fired: {stats.shotsFired}</p>
                <p className="total-hits-counter">Total Hits: {stats.totalHits}</p>
                <p className="total-miss-counter">Total Miss: {stats.totalMiss}</p>
            </div>
        </div>
    );
}

export default GameStats
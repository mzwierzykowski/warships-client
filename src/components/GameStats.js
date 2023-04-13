import './GameStats.css'

function GameStats({stats}) {
    const shipStats = stats.shipStats.map((shipStat) => {
        return (<div className="ship-stat" key={shipStat.type}>
            <p className="ship-type">{shipStat.type}: {shipStat.leftInGameCount}/{shipStat.totalCount}</p>
        </div>);
    });

    let counters = <div></div>;
    if(stats.shotsFired > 0) {
        counters = (
            <div className="game-counters">
                <p className="shots-fired-counter">Shoots fired: {stats.shotsFired}</p>
                <p className="total-hits-counter">Total Hits: {stats.totalHits}</p>
                <p className="total-miss-counter">Total Miss: {stats.totalMiss}</p>
            </div>
        );
    }
    return (
        <div className="game-stats-container">
            <div className="ship-stats">
                {shipStats}
            </div>
            {counters}
        </div>
    );
}

export default GameStats
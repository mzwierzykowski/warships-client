import './GameStats.css'

function GameStats({stats}) {
    const shipStats = stats.shipStats.map((shipStat) => {
        return (<tr className="ship-stat" key={shipStat.type}>
            <td>{shipStat.type}</td> 
            <td>{shipStat.totalCount}</td>
            <td>{shipStat.leftInGameCount}</td>
        </tr>);
    });

    let content = <div></div>;
    if(stats.shotsFired > 0) {
        content = (
            <div>
                <div className="ship-stats">
                    <table>
                        <tr>
                            <th>Ship type</th>
                            <th>Count</th>
                            <th>Left</th>
                        </tr>
                        {shipStats}
                    </table>
                </div>
                <div className="game-counters">
                    <table>
                        <tr>
                            <th>Shoots</th> 
                            <th>Hits</th>
                            <th>Misses</th>
                        </tr>
                        <tr>
                            <td>{stats.shotsFired}</td>
                            <td>{stats.totalHits}</td>
                            <td>{stats.totalMiss}</td>
                        </tr>
                    </table>
                </div>
            </div>

        );
    }
    return (
        <div className="game-stats-container">
            {content}
        </div>
    );
}

export default GameStats
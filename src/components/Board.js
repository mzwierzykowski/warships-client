import Tile from "./Tile";

function Board({board, handlePointClick}) {
    const renderedTiles =  board.points ?? 
            board.points.map((point) => {
                return <Tile key={point.id} point={point} handlePointClick={handlePointClick}/>
            });

    return (
        <div className="board">
            {renderedTiles}
        </div>
    );
}

export default Board;
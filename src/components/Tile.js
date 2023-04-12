import './Tile.css';

function Tile({point, handlePointClick}) {
    return (
        <div className="tile">
            {point.id}
        </div>
    );
}

export default Tile;
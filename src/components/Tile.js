import './Tile.css';

function Tile({point, handlePointClick}) {
    const tileColors = [
        'grey',
        'blue',
        'red'
    ]
    const handleClick = () => {
        console.log('Tile clicked: ', point.id)
        handlePointClick(point.id);
    }
    return (
        <div className="tile" onClick={handleClick}
            style={{backgroundColor: tileColors[point.state]}}>
        </div>
    );
}

export default Tile;
import './Goat-table.css';
import goats from './goats.js';

function GoatTable() {
    return (
    <div className="GoatTableContainer">
        <table className="GoatTable">
            <thead>
            </thead>
            <tbody>
                {goats.map(goat => (
                    <tr key={goat.id}>
                        <a href={"https://www.google.com/search?q=" + goat.name} target="_blank" rel="noreferrer">
                        <td>{goat.rank}</td>
                        <td>{goat.name}</td>
                        </a>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}

export default GoatTable;
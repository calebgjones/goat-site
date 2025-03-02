import './App.css';
import GoatTable from './Goat-table/Goat-table.js';

function App() {
  return (
    <body>
      <div className="Root">
        <header className="Header">
        <h1>Goat Rankings</h1>
          <a href="https://www.klubj.net"><p>#1 Caleb Jones</p></a>
        </header>
      </div>

      <div className="calebContainer">
        <div className="caleb">
          <img src={require('./img/Subject.png')} alt="Placeholder" />
          <p style={{font: '20pt Futura'}}>Goated.</p>
        </div>
      </div>

      
      <div className="Main">
        <GoatTable />
      </div>

    </body>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Medley de questions techniques:</p>
        <p>
          En <code class='text-yellow-300'>javascript</code>
        </p>
        <button className="btn btn-outline btn-warning">Go to algos</button>
      </header>
    </div>
  );
}

export default App;

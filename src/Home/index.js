import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.svg';

function Home() {
  const navigate = useNavigate();
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Medley de questions techniques:</p>
      <p>
        en <code className="text-yellow-300">javascript</code>
      </p>
      <button
        type="button"
        className="btn btn-outline btn-warning"
        onClick={() => navigate('/questionInJs')}
      >
        Go to algos
      </button>
    </header>
  );
}

export default Home;

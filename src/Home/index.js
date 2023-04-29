import React from 'react'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Medley de questions techniques:</p>
      <p>
        en <code class="text-yellow-300">javascript</code>
      </p>
      <button className="btn btn-outline btn-warning">
        <Link to="/questionInJs">Go to algos</Link>
      </button>
    </header>
  )
}

export default Home

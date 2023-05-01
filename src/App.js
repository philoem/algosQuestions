import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import QuestionsInJs from './QuestionsInJs'

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/questionInJs" element={<QuestionsInJs />} />
			</Routes>
		</div>
	)
}

export default App

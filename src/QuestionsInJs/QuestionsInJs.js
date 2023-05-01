import React from 'react'
import BackToHome from '../Components/goBack/GoBack'
import FirstQuestion from './FirstQuestion/FirstQuestion'
import SecondQuestion from './SecondQuestion/SecondQuestion'
import ThirdQuestion from './ThirdQuestion/ThirdQuestion'
import FourthQuestion from './FourthQuestion/FourthQuestion'

function QuestionsInJs() {
	return (
		<div className="w-100">
			<div className="navbar bg-base-100">
				<BackToHome />
			</div>
			<FirstQuestion />
			<SecondQuestion />
			<ThirdQuestion />
			<FourthQuestion />
		</div>
	)
}

export default QuestionsInJs

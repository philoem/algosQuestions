import React from 'react'
import BackToHome from '../Components/goBack'
import FirstQuestion from './FirstQuestion'
import SecondQuestion from './SecondQuestion'
import ThirdQuestion from './ThirdQuestion'
import FourthQuestion from './FourthQuestion'

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

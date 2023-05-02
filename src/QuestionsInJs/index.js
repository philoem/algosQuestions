import React from 'react'
import BackToHome from '../Components/goBack'
import FirstQuestion from './FirstQuestion'
import SecondQuestion from './SecondQuestion'
import ThirdQuestion from './ThirdQuestion'
import FourthQuestion from './FourthQuestion'
import FifthQuestion from './FifthQuestion'
import SixthQuestion from './SixthQuestion'
import ScrollToTop from '../Components/ScrollToTop'
import styles from './index.module.css'

function QuestionsInJs() {
	return (
		<div className={styles.container}>
			<div className={styles.containerBtnBack}>
				<BackToHome />
			</div>
			<FirstQuestion />
			<SecondQuestion />
			<ThirdQuestion />
			<FourthQuestion />
			<FifthQuestion />
			<SixthQuestion />
			<ScrollToTop />
		</div>
	)
}

export default QuestionsInJs

import GoBack from '../Components/GoBack'
import ScrollToTop from '../Components/ScrollToTop'
import styles from './index.module.css'
import CardsQuestions from './CardsQuestions'

const QuestionsInJs = () => {
	return (
		<div className={styles.container}>
			<div className={styles.containerBtnBack}>
				<GoBack />
			</div>
			<CardsQuestions />
			<ScrollToTop />
		</div>
	)
}

export default QuestionsInJs

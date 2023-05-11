import GoBack from '../Components/GoBack'
import ListOfQuestions from './ListOfQuestions'
import ScrollToTop from '../Components/ScrollToTop'
import styles from './index.module.css'

function QuestionsInJs() {
	return (
		<div className={styles.container}>
			<div className={styles.containerBtnBack}>
				<GoBack />
			</div>
			<ListOfQuestions />
			<ScrollToTop />
		</div>
	)
}

export default QuestionsInJs

import question from '../../api/q&a.json'
import styles from './index.module.css'
import Statement from '../components/Statement'
import FirstResult from '../components/FirstResult'
import SecondResult from '../components/SecondResult'
import ProgressBar from '../components/ProgressBar'
import Topic from '../components/Topic'

const CardsQuestions = () => {
	const questionLength = question?.length
	return (
		<div>
			{question?.map(({ id, topic, statement, result1, result2 }, index) => {
				return (
					<div className={styles.coursesContainer} key={`question_${index}`}>
						<div className={styles.course}>
							<Topic topic={topic} index={index} />
							<div className={styles.courseInfo}>
								<ProgressBar questionLength={questionLength} index={index} />
								<Statement statement={statement} />
								<FirstResult result1={result1} id={id} />
								<SecondResult result2={result2} id={id} />
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default CardsQuestions

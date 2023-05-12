import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import question from '../../api/q&a.json'
import useRevealSolution from '../hooks/useRevealSolution'
import SwitchButton from '../../Components/SwitchButton'
import styles from './index.module.css'

const CardsQuestions = () => {
	const { isVisibleFirst, isVisibleSecond, toggleButtonFirst, toggleButtonSecond } =
		useRevealSolution()
	return (
		<div>
			{question?.map(({ id, topic, statement, result1, result2 }, index) => {
				return (
					<>
						<div className={styles.coursesContainer} key={`question_${index}`}>
							<div className={styles.course}>
								<div className={styles.coursePreview}>
									<h6>Question {index + 1}</h6>
									<h4>{topic}</h4>
								</div>
								<div className={styles.courseInfo}>
									<div className={styles.progressContainer}>
										<div className={styles.progress} />
										<span className={styles.progressText}>{index + 1}/9 Challenges</span>
									</div>
									{statement && (
										<div className={styles.syntaxContainer}>
											<h6>Enoncé: </h6>
											<div className={styles.syntax}>
												<SyntaxHighlighter language="javascript" style={dracula}>
													{statement}
												</SyntaxHighlighter>
											</div>
										</div>
									)}
									<div>
										<div className={styles.firstSubContainer}>
											<h6>1ère solution: </h6>
											<SwitchButton
												onClick={() => toggleButtonFirst(id)}
												key={`swicthFirst_${id}`}
											/>
											<p className={styles.labelText}>
												{isVisibleFirst[id] === true ? 'Hide' : 'Reveals'}
											</p>
										</div>
										{isVisibleFirst[id] && (
											<SyntaxHighlighter language="javascript" style={dracula}>
												{result1}
											</SyntaxHighlighter>
										)}
									</div>
									<div>
										{result2 && (
											<div className={styles.secondSubContainer}>
												<h6>2ème solution:</h6>
												<SwitchButton
													onClick={() => toggleButtonSecond(id)}
													key={`swicthSecond_${id}`}
												/>
												<p className={styles.labelText}>
													{isVisibleSecond[id] === true ? 'Hide' : 'Reveals'}
												</p>
											</div>
										)}
										{isVisibleSecond[id] && result2 && (
											<SyntaxHighlighter language="javascript" style={dracula}>
												{result2}
											</SyntaxHighlighter>
										)}
									</div>
								</div>
							</div>
						</div>
					</>
				)
			})}
		</div>
	)
}

export default CardsQuestions

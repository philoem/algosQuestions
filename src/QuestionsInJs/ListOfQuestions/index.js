import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import styles from '../styles/questionsInJs.module.css'
import useRevealSolution from '../hooks/useRevealSolution'
import SwitchButton from '../../Components/SwitchButton'
import question from '../../api/q&a.json'

function ListOfQuestions() {
	const { isVisibleFirst, isVisibleSecond, toggleButtonFirst, toggleButtonSecond } =
		useRevealSolution()
	return (
		<div className={styles.container}>
			{question?.map(({ id, topic, statement, result1, result2 }, index) => {
				return (
					<>
						<div key={`question_${index}`}>
							<div className={styles.firstSubContainer}>
								<p>
									<strong>Question {index + 1}:</strong> {topic}
								</p>
							</div>
							{statement && (
								<SyntaxHighlighter language="javascript" style={dracula}>
									{statement}
								</SyntaxHighlighter>
							)}
						</div>
						<div>
							<div className={styles.firstSubContainer}>
								<p>1ère solution: </p>
								<SwitchButton onClick={() => toggleButtonFirst(id)} key={`swicthFirst_${id}`} />
								<p className={styles.labelText}>
									{isVisibleFirst[id] === true ? 'Hide' : 'Reveals'}
								</p>
							</div>
							{isVisibleFirst[id] === true && (
								<SyntaxHighlighter language="javascript" style={dracula}>
									{result1}
								</SyntaxHighlighter>
							)}
						</div>
						<div>
							{result2 && (
								<div className={styles.secondSubContainer}>
									<p>2ème solution:</p>
									<SwitchButton onClick={() => toggleButtonSecond(id)} key={`swicthSecond_${id}`} />
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
					</>
				)
			})}
		</div>
	)
}

export default ListOfQuestions

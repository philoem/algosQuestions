import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import styles from '../styles/questionsInJs.module.css'
import useRevealSolution from '../hooks/useRevealSolution'
import SwitchButton from '../../Components/SwitchButton'

function FirstQuestion() {
	const { isVisibleFirst, isVisibleSecond, toggleButtonFirst, toggleButtonSecond } =
		useRevealSolution()

	const codeStringMyArray = 'const myArray = [1,2,3,4,5,6];'
	const codeStringResultFirst =
		'Utiliser Math:\nconst resultFirst = Math.max(...myArray);\nconsole.log(resultFirst); // output: 6'
	const codeStringResultSecond =
		'Utiliser reduce:\nconst resultSecond = myArray.reduce((x,y) => (x > y) ? x : y);\nconsole.log(resultFirst); // output: 6'
	return (
		<div className={styles.container}>
			<div>
				<div className={styles.firstSubContainer}>
					<p>
						<strong>Question 1:</strong> trouver le chiffre le plus grand dans le tableau
					</p>
				</div>
				<SyntaxHighlighter language="javascript" style={dracula}>
					{codeStringMyArray}
				</SyntaxHighlighter>
			</div>
			<div>
				<div className={styles.firstSubContainer}>
					<p>1ère solution: </p>
					<SwitchButton onClick={toggleButtonFirst} isVisibleFirst={isVisibleFirst} />
				</div>
				{isVisibleFirst && (
					<SyntaxHighlighter language="javascript" style={dracula}>
						{codeStringResultFirst}
					</SyntaxHighlighter>
				)}
			</div>
			<div>
				<div className={styles.secondSubContainer}>
					<p>2ème solution:</p>
					<SwitchButton onClick={toggleButtonSecond} isVisibleSecond={isVisibleSecond} />
				</div>
				{isVisibleSecond && (
					<SyntaxHighlighter language="javascript" style={dracula}>
						{codeStringResultSecond}
					</SyntaxHighlighter>
				)}
			</div>
		</div>
	)
}

export default FirstQuestion

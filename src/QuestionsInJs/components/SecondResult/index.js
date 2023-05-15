import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import styles from '../../CardsQuestions/index.module.css'
import SwitchButton from '../../../Components/SwitchButton'
import PropTypes from 'prop-types'
import useRevealSolution from '../../hooks/useRevealSolution'

const SecondResult = ({ result2, id }) => {
	const { isVisibleSecond, toggleButtonSecond } = useRevealSolution()
	return (
		<div>
			{result2 && (
				<div className={styles.secondSubContainer}>
					<h6>2ème solution:</h6>
					<SwitchButton onClick={() => toggleButtonSecond(id)} key={`swicthSecond_${id}`} />
					<p className={styles.labelText}>{isVisibleSecond[id] === true ? 'Hide' : 'Reveals'}</p>
				</div>
			)}
			{isVisibleSecond[id] && result2 && (
				<SyntaxHighlighter language='javascript' style={dracula}>
					{result2}
				</SyntaxHighlighter>
			)}
		</div>
	)
}

SecondResult.defaultProps = {
	result2: null,
	id: null
}

SecondResult.propTypes = {
	result2: PropTypes.string,
	id: PropTypes.number
}

export default SecondResult

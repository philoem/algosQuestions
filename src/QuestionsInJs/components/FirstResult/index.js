import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import styles from '../../CardsQuestions/index.module.css'
import SwitchButton from '../../../Components/SwitchButton'
import PropTypes from 'prop-types'
import useRevealSolution from '../../hooks/useRevealSolution'

const FirstResult = ({ result1, id }) => {
	const { isVisibleFirst, toggleButtonFirst } = useRevealSolution()
	return (
		<div>
			<div className={styles.firstSubContainer}>
				<h6>1ère solution: </h6>
				<SwitchButton onClick={() => toggleButtonFirst(id)} key={`swicthFirst_${id}`} />
				<p className={styles.labelText}>{isVisibleFirst[id] === true ? 'Hide' : 'Reveals'}</p>
			</div>
			{isVisibleFirst[id] && (
				<SyntaxHighlighter language='javascript' style={dracula}>
					{result1}
				</SyntaxHighlighter>
			)}
		</div>
	)
}

FirstResult.defaultProps = {
	result1: null,
	id: null
}

FirstResult.propTypes = {
	result1: PropTypes.string,
	id: PropTypes.number
}

export default FirstResult

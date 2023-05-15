import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import styles from '../../CardsQuestions/index.module.css'
import PropTypes from 'prop-types'

const Statement = ({ statement }) => {
	return (
		<>
			{statement && (
				<div className={styles.syntaxContainer}>
					<h6>Enoncé: </h6>
					<div className={styles.syntax}>
						<SyntaxHighlighter language='javascript' style={dracula}>
							{statement}
						</SyntaxHighlighter>
					</div>
				</div>
			)}
		</>
	)
}

Statement.defaultProps = {
	statement: null
}

Statement.propTypes = {
	statement: PropTypes.string
}

export default Statement

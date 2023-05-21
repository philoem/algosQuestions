import React from 'react'
import progressBar from '../../../utils/progressBar'
import styles from '../../CardsQuestions/index.module.css'
import PropTypes from 'prop-types'

const ProgressBar = ({ questionLength, index }) => {
	const progress = progressBar({ questionLength, index })
	return (
		<div className={styles.progressContainer}>
			<div
				className={styles.progress}
				style={{
					width: `${progress}%`,
					backgroundColor: '#2A265F'
				}}
				// eslint-disable-next-line jsx-a11y/aria-role
				role='progressBar'
			/>
			<span className={styles.progressText}>
				{index + 1}/{questionLength} Questions
			</span>
		</div>
	)
}

ProgressBar.defaultProps = {
	questionLength: null,
	index: 0
}

ProgressBar.propTypes = {
	questionLength: PropTypes.number,
	index: PropTypes.number
}

export default ProgressBar

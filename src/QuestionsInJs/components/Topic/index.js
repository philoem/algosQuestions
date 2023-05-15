import styles from '../../CardsQuestions/index.module.css'
import PropTypes from 'prop-types'

const Topic = ({ topic, index }) => {
	return (
		<div className={styles.coursePreview}>
			<h6>Question {index + 1}</h6>
			<h4>{topic}</h4>
		</div>
	)
}

Topic.defaultProps = {
	topic: null,
	index: 0
}

Topic.propTypes = {
	topic: PropTypes.string,
	index: PropTypes.number
}

export default Topic

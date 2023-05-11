import PropTypes from 'prop-types'
import styles from './index.module.css'

function SwitchButton({ onClick }) {
	return (
		<div className={styles.containerSwitchBtn}>
			<label className={styles.switch}>
				<input type="checkbox" onClick={onClick} />
				<span className={styles.slider} />
			</label>
		</div>
	)
}

SwitchButton.propTypes = {
	onClick: PropTypes.func
}

SwitchButton.defaultProps = {
	onClick: () => null
}

export default SwitchButton

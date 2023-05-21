import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'

/**
 * Renders a switch button component.
 *
 * @param {function} onClick - function to be called when button is clicked to display solution
 * @return {JSX.Element} A switch button component
 */
const SwitchButton = ({ onClick }) => {
	return (
		<div className={styles.containerSwitchBtn}>
			<label className={styles.switch}>
				<input aria-label='checkbox' type='checkbox' onClick={onClick} />
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

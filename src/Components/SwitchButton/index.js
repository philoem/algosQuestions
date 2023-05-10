import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'

function SwitchButton({ onClick, isVisibleFirst, isVisibleSecond }) {
	return (
		<div className={styles.containerSwitchBtn}>
			<label className={styles.switch}>
				<input type="checkbox" onClick={onClick} />
				<span className={styles.slider} />
			</label>
			<p className={styles.labelText}>{isVisibleFirst || isVisibleSecond ? 'Hide' : 'Reveals'}</p>
		</div>
	)
}

SwitchButton.propTypes = {
	onClick: PropTypes.func,
	isVisibleFirst: PropTypes.bool,
	isVisibleSecond: PropTypes.bool
}

SwitchButton.defaultProps = {
	onClick: () => null,
	isVisibleFirst: false,
	isVisibleSecond: false
}

export default SwitchButton

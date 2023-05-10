import React from 'react'
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

export default SwitchButton

import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.css'

const GoBack = () => {
	const navigate = useNavigate()

	const goTo = useCallback(() => {
		navigate('..')
	}, [navigate])

	return (
		<div className={styles.containerBtnGoBack}>
			<button type='button' className={styles.btnGoBack} onClick={goTo}>
				Back to home
			</button>
		</div>
	)
}

export default GoBack

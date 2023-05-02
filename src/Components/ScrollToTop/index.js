import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleUp } from 'react-icons/fa'
import styles from './index.module.css'

const ScrollToTop = () => {
	const [visible, setVisible] = useState(false)

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop
		if (scrolled > 100) {
			setVisible(true)
		} else if (scrolled <= 100) {
			setVisible(false)
		}
	}

	const scrollingToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	useEffect(() => {
		window.addEventListener('scroll', toggleVisible)
	}, [])

	return (
		<>
			<button onClick={scrollingToTop} className={styles.buttonToTop}>
				{visible && <FaArrowAltCircleUp />}
			</button>
		</>
	)
}

export default ScrollToTop

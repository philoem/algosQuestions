import { useState, useCallback } from 'react'

const useRevealSolution = () => {
	const [isVisible, setIsVisible] = useState(false)
	const toggleButton = useCallback(() => setIsVisible((isVisible) => !isVisible), [])

	return { isVisible, toggleButton }
}

export default useRevealSolution

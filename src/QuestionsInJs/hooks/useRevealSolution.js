import { useState, useCallback } from 'react'

const useRevealSolution = () => {
	const [isVisibleFirst, setIsVisibleFirst] = useState(false)
	const [isVisibleSecond, setIsVisibleSecond] = useState(false)
	const toggleButtonFirst = useCallback(() => {
		setIsVisibleFirst((isVisibleFirst) => !isVisibleFirst)
	}, [])
	const toggleButtonSecond = useCallback(() => {
		setIsVisibleSecond((isVisibleSecond) => !isVisibleSecond)
	}, [])

	return {
		isVisibleFirst,
		isVisibleSecond,
		toggleButtonFirst,
		toggleButtonSecond
	}
}

export default useRevealSolution

import { useState, useCallback } from 'react'

const useRevealSolution = () => {
	const [isVisibleFirst, setIsVisibleFirst] = useState([])
	const [isVisibleSecond, setIsVisibleSecond] = useState([])

	const toggleButtonFirst = useCallback(
		(index) => {
			const newButtons = [...isVisibleFirst]
			newButtons[index] = !newButtons[index]
			setIsVisibleFirst(newButtons)
		},
		[isVisibleFirst]
	)
	const toggleButtonSecond = useCallback(
		(index) => {
			const newButtons = [...isVisibleSecond]
			newButtons[index] = !newButtons[index]
			setIsVisibleSecond(newButtons)
		},
		[isVisibleSecond]
	)

	return {
		isVisibleFirst,
		isVisibleSecond,
		toggleButtonFirst,
		toggleButtonSecond
	}
}

export default useRevealSolution

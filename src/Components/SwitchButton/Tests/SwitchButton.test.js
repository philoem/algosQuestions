import React from 'react'
import { render, screen } from '@testing-library/react'
import { defineFeature, loadFeature } from 'jest-cucumber'
import SwitchButton from '../../SwitchButton/index'
import userEvent from '@testing-library/user-event'

const feature = loadFeature('src/Components/SwitchButton/Tests/SwitchButton.feature')

defineFeature(feature, (test) => {
	let container
	const onclick = jest.fn()

	const givenSwitchButtonIsRendered = (given, comp) => {
		given('Switch button is rendered', () => {
			container = render(comp).container
		})
	}

	const andRequiredElementsAreMounted = (and) => {
		and('Required elements are mounted', () => {
			expect(screen.getByRole('checkbox')).toBeInTheDocument()
		})
	}

	const andDefaultStyleIsApplied = (and) => {
		and('Default style is applied', () => {
			expect(container).toMatchSnapshot()
		})
	}
	test('Switch button clicked for the first time', ({ given, when, then, and }) => {
		givenSwitchButtonIsRendered(given, <SwitchButton onClick={onclick} />)
		andRequiredElementsAreMounted(and)
		andDefaultStyleIsApplied(and)

		when('Switch button is clicked', () => {
			userEvent.click(screen.getByRole('checkbox'))
		})

		then('Switch button is checked', () => {
			const checkbox = screen.getByRole('checkbox', { name: 'checkbox' })
			expect(checkbox).toBeChecked()
		})

		and('Switch button callback should be called', () => {
			expect(onclick).toHaveBeenCalledTimes(1)
		})
	})
})

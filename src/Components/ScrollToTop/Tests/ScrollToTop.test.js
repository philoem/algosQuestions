import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { defineFeature, loadFeature } from 'jest-cucumber'
import ScrollToTop from '../../ScrollToTop/index'
import userEvent from '@testing-library/user-event'

const feature = loadFeature('src/Components/ScrollToTop/Tests/ScrollToTop.feature')

defineFeature(feature, (test) => {
	let container

	const givenScrollToTopIsRendered = (given, comp) => {
		given('ScrollToTop component is rendered', () => {
			container = render(comp).container
		})
	}

	const andRequiredElementsAreMounted = (and) => {
		and('Required elements are mounted', () => {
			expect(screen.getByRole('button')).toBeInTheDocument()
		})
	}

	const andDefaultStyleIsApplied = (and) => {
		and('Default style is applied', () => {
			expect(container).toMatchSnapshot()
		})
	}

	test('ScrollToTop is display', ({ given, when, then, and }) => {
		givenScrollToTopIsRendered(given, <ScrollToTop />)
		andRequiredElementsAreMounted(and)
		andDefaultStyleIsApplied(and)

		when('User scroll to end of list', () => {
			fireEvent.scroll(window, { target: { scrollY: 100 } })
		})

		then("ScrollToTop's icon is display", () => {
			const button = screen.getByRole('button')
			expect(button).toBeEnabled()
		})

		and("ScrollToTop's button is clicked", () => {
			userEvent.click(screen.getByRole('button'))
		})
	})
})

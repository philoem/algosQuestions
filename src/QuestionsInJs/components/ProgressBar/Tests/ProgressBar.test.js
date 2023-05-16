import React from 'react'
import { render, screen } from '@testing-library/react'
import { defineFeature, loadFeature } from 'jest-cucumber'
import ProgressBar from '../../ProgressBar/index'

const feature = loadFeature('src/QuestionsInJs/components/ProgressBar/Tests/ProgressBar.feature')

defineFeature(feature, (test) => {
	let container

	const givenProgressBarComponentIsRendered = (given, comp) => {
		given('ProgressBar component is rendered', () => {
			container = render(comp).container
		})
	}

	const andRequiredElementsAreMounted = (and) => {
		and('Required elements are mounted', () => {
			expect(screen.getByRole('progressBar')).toBeInTheDocument()
			expect(screen.getByText(/Questions/i)).toBeInTheDocument()
		})
	}

	const andDefaultStyleIsApplied = (and) => {
		and('Default style is applied', () => {
			expect(container).toMatchSnapshot()
		})
	}

	test('Default progress bar', ({ given, and }) => {
		givenProgressBarComponentIsRendered(given, <ProgressBar questionLength={6} index={0} />)
		andRequiredElementsAreMounted(and)
		andDefaultStyleIsApplied(and)

		and('Correct value is applied', () => {
			expect(screen.getByRole('progressBar')).toHaveStyle('width: 17%')
			expect(screen.getByRole('progressBar')).toHaveStyle('backgroundColor: #2A265F')
		})
	})

	test('Math round value', ({ given, and }) => {
		givenProgressBarComponentIsRendered(given, <ProgressBar questionLength={6} index={3} />)
		andRequiredElementsAreMounted(and)
		andDefaultStyleIsApplied(and)

		and('Value is rounded', () => {
			expect(screen.getByRole('progressBar')).toHaveStyle('width: 67%')
		})
	})
})

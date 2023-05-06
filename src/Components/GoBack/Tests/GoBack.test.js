//import { render, screen } from '@testing-library/react'
/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render } from '@testing-library/react'
import { defineFeature, loadFeature } from 'jest-cucumber'
import GoBack from '../index'

const feature = loadFeature('src/Components/GoBack/Tests/GoBack.feature')

defineFeature(feature, (test) => {
	let container

	const givenGoBackButtonIsMounted = (given, comp) => {
		given('GoBack button is mounted', () => {
			container = render(comp).container
		})
	}

	test('GoBack button is displayed', ({ given, and }) => {
		givenGoBackButtonIsMounted(given, <GoBack />)
		and('Style should be applied', () => {
			expect(container).toMatchSnapshot()
		})
	})
})

// test('renders learn react link', () => {
// 	render(<GoBack />)
// 	const linkElement = screen.getByText(/Back to home/i)
// 	expect(linkElement).toBeInTheDocument()
// })

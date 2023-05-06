import { render, screen } from '@testing-library/react'
import GoBack from '../index'

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUsedNavigate
}))

test('renders learn react link', () => {
	render(<GoBack />)
	const linkElement = screen.getByText(/Back to home/i)
	expect(linkElement).toBeInTheDocument()
})

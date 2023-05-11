import { render, screen } from '@testing-library/react'
import Home from './page'

describe('page', () => {
    it('should render', () => {
        render(<Home />)

        expect(screen.getByText('HELLO TODO APP')).toBeInTheDocument()
    })
})
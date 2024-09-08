import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Spinner from "../Spinner"
 
describe('Spinner', () => {
  it('renders an svg with status role', () => {
    render(<Spinner />)
 
    const svg = screen.getByRole("status");

    expect(svg).toBeInTheDocument()
  })
})
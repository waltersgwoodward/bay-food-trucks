import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Spinner, { SpinnerProps } from "../Spinner"

const props: SpinnerProps = {
  className: undefined,
  fill: undefined
}

describe('Spinner', () => {
  it('renders an svg with status role', () => {
    render(<Spinner {...props} />)

    const svg = screen.getByRole("status");

    expect(svg).toBeInTheDocument()
  })
})
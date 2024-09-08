import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../index'

jest.mock('swr');

describe('Home', () => {
  it('renders an h1 with correct text', () => {
    render(<Home />)

    const h1 = screen.getByText("Food Trucks of San Francisco");

    expect(h1).toBeInTheDocument()
  })

  // TODO: Find a way to mock and test useSWR
  // This looks promising: https://stackoverflow.com/questions/67958776/how-to-write-test-with-swr
})


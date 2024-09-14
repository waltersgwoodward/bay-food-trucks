import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import FoodTruck, { FoodTruckProps } from "../FoodTruck"

const props: FoodTruckProps = {
    applicant: "applicant",
    address: "address",
    description: "description",
}
 
describe('FoodTruck', () => {
  it('renders an h5 with the applicant data', () => {
    render(<FoodTruck {...props}/>)

    const h5 = screen.getByText("applicant");

    expect(h5).toBeInTheDocument();
  })

  it('renders a p tag with the description data', () => {
    render(<FoodTruck {...props}/>)

    const p = screen.getByText("description");

    expect(p).toBeInTheDocument();
  })

  it('renders a p tag with the address data', () => {
    render(<FoodTruck {...props}/>)

    const p = screen.getByText("address");

    expect(p).toBeInTheDocument();
  })
})
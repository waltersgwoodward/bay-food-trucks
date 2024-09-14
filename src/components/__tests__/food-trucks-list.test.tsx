import React from 'react';
import { render, screen } from '@testing-library/react';
import FoodTrucksList, { FoodTrucksListProps } from '../FoodTrucksList';
import { mockData, mockErrorResponse } from '@/mockData';


const props: FoodTrucksListProps = {
  response: {
    data: [],
    isLoading: false,
    error: false,
    mutate: jest.fn(),
    isValidating: false
  }
}

describe('src/components/FoodTrucksList.tsx', () => {
  render(<FoodTrucksList {...props} />)

  it('should render expected content empty list is passed', async () => {
    const element = screen.getByTestId("no-matches-found");
    expect(element).toBeInTheDocument;

    expect(element.textContent).toEqual("No matches found!");
  });

  it('should render the food truck list header', () => {
    expect(screen.queryByText("Food Trucks of San Francisco", { selector: "h1" })).toBeInTheDocument;
  });

  describe('isLoading', () => {
    beforeEach(() => {
      props.response.isLoading = true;
    });

    afterEach(() => {
      props.response.isLoading = false;
    });

    it('should render expected content when data is loading', () => {
      render(<FoodTrucksList {...props} />)

      const spinner = screen.getByTestId("spinner");
      expect(spinner).toBeInTheDocument;
    });
  });

  describe('when errors are found', () => {
    beforeEach(() => {
      props.response.error = mockErrorResponse;
    });

    afterEach(() => {
      props.response.error = false;
    });

    it('should render expected content when the response returns with errors', () => {
      render(<FoodTrucksList {...props} />)

      const errors = screen.getByTestId("errors");
      expect(errors.textContent).toEqual(props.response.error.message);
    });
  });

  describe('when food trucks data is provided', () => {
    beforeEach(() => {
      props.response.data = mockData;
    });

    afterEach(() => {
      props.response.data = [];
    })

    it('should render food trucks data', () => {
      const { container } = render(<FoodTrucksList {...props} />);

      const header = container.querySelector("h1");
      expect(header).toBeInTheDocument;

      if (header) {
        expect(header.textContent).toEqual("Food Trucks of San Francisco");
        expect(props.response.data.length).toBe(mockData.length);
      }
    });
  });
});
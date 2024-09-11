# Food Trucks of San Francisco

Welcome to the Food Trucks of San Francisco App. Features include the ability to view and filter up-to-date details on Food Trucks in San Francisco, taken from the DataSF open dataset [located here](https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat/data).

To jump straight to the deployed app [click here](https://san-fran-food-trucks.vercel.app/).

## Getting Started

Install npm packages:

`npm i`

To run in development:

`npm run dev`

To run tests:

`npm run test`

## Development Notes

### General Comments

After reading the instructions for this technical challenge I established the following goals:

* stay within the 2 to 3 hour allotted time window
* prioritize production readiness

To meet these goals, where possible, I removed potential time sinks from the process, for example by using NextJS's official boilerplate and by reusing code for various common components (such as the FoodTruck card component).

In the initial planning phase, I spent more time than was probably necessary considering how to fetch the data from DataSF, and working towards integrating the location data into a map from the Google Map API earlier in the process (which I ultimately abandoned). If I were to do a similar project again, I think I would just rely on my past experience and choose the fetching method I was most familiar with (which is how I ended up using SWR) and probably eliminate the use of the Google Map API (which would have pushed this project well beyond the allotted 2 to 3 hour recommendation).

### Feature Ideas

The more I considered this particular dataset from DataSF, the more ideas for future improvements and new features came to mind. Below is a list of some of the ideas that I would have liked to implement given more time:

* Fix misaligned spinner positioning
* Add more substantial types, particularly in terms of the expected responses (and errors) from DataSF and any other APIs used.
* Break up the rendered content in the Home component into smaller components (e.g. FoodTruckList, SearchFilter) that could be more thoroughly tested.
* Integrate the Google Map API so that, instead of a comically long list of items, these various food trucks could be represented as markers on a map that, when selected, would render a modal with more detailed info.
* Include direction links using the longitude and latitude data for each food truck for Google and Apple maps.
* Create a visual distinction between approved and expired permits.
* Include validation for user input to mitigate unnecessary failed responses.
* Add validation for incoming data to fail early in the event that expected/required data is not included.
* Replace placeholder card images with something useful or just remove them altogether.
## Acknowledgements

Thank You to the team at Estée Lauder for the opportunity to take this challenge!

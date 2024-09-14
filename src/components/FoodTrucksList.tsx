import { FoodTruckDataType } from "@/mockData";
import FoodTruck from "./FoodTruck"
import { useState } from "react";
import debounce from "lodash/debounce";
import { SWRResponse } from "swr";
import Spinner from "./Spinner";


export type FoodTrucksListProps = {
  response: SWRResponse
}

const FoodTrucksList = ({ response }: FoodTrucksListProps) => {
  const { data, isLoading, error } = response || {};

  const [filteredData, setFilteredData] = useState<FoodTruckDataType[]>();

  const handleOnChange = debounce((event) => {
    const filtered = data.filter((truck: FoodTruckDataType) => (truck.applicant + truck.address + truck.fooditems).includes(event.target.value))
    setFilteredData(filtered);
  }, 250);

  const foodTrucks: FoodTruckDataType[] = filteredData || data || [];

  if (isLoading) {
    return <Spinner className="flex h-screen items-center justify-center" />
  }

  if (error) {
    return <div data-testid="errors" className="text-center m-6">{error.message ?? "There was an error retrieving the truck data! Please try again later!"}</div>
  }

  return <>
    <div className="text-center m-6">
      <h1 className="mb-6 font-extrabold text-3xl text-center">Food Trucks of San Francisco</h1>
      <input className="bg-red self-center text-blue-700 p-2 rounded" type="text" placeholder="Filter..." onChange={handleOnChange} />
    </div>
    {!!foodTrucks.length && <div
      className={`grid items-center justify-items-center min-h-screen p-0`}
    >
      <div className="flex flex-col gap-8 row-start-1 items-center sm:items-start">
        {foodTrucks.map((truck) => {
          return <FoodTruck
            key={truck.objectid}
            applicant={truck.applicant}
            address={truck.locationdescription}
            description={truck.fooditems}
          />
        })}
      </div>
    </div>}
    {!foodTrucks.length && <div data-testid="no-matches-found" className="text-center mt-8">No matches found!</div>}
  </>

}

export default FoodTrucksList;
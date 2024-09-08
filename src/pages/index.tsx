import FoodTruck from '@/components/FoodTruck';
import mockData from './mockData';

export default function Home() {
  const foodTrucks = mockData;

  return (
    <>
      <div className="text-center m-6">
        <h1 className="mb-6 font-extrabold text-3xl text-center">Food Trucks of San Francisco</h1>
      </div>
      {!!foodTrucks.length && <div
        className={`grid items-center justify-items-center min-h-screen p-0`}
      >
        <div className="flex flex-col gap-8 row-start-1 items-center sm:items-start">
          {foodTrucks.map((truck: any) => {
            return <FoodTruck
              key={truck.objectid}
              applicant={truck.applicant}
              address={truck.locationdescription}
              description={truck.fooditems}
            />
          })}
        </div>
      </div>}
    </>
  );
}

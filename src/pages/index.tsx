import mockData from './mockData';

export default function Home() {
  const foodTrucks = mockData;

  return (
    <>
      <div className="text-center m-6">
        <h1 className="mb-6 font-extrabold text-3xl text-center">Food Trucks of San Francisco</h1>
      </div>
      {!!foodTrucks.length && <div className="flex flex-col items-center">
        {foodTrucks.map((truck: any) => <div>{truck.applicant}</div>)}
      </div>}
    </>
  );
}

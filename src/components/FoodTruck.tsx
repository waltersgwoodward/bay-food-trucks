import { FoodTruckType } from "./types"

// source: https://tw-elements.com/docs/react/components/cards/
const FoodTruck = ({ applicant, address, description }: FoodTruckType) => {
    return (<>
        <div
            className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
            <img
                className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                alt="" />
            <div className="flex flex-col justify-start p-6">
                <h5
                    className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                    {applicant}
                </h5>
                <div className="underline mb-3">Food Items</div>
                <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-200">
                    {description || "N/A"}
                </p>
                <div className="underline mb-3">Address</div>
                <p className="text-sm text-neutral-500 dark:text-neutral-300">
                    {address || "N/A"}
                </p>
            </div>
        </div>
    </>
    )
}

export default FoodTruck;
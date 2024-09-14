import Image from "next/image";
import { useState } from "react";
import Spinner from "./Spinner";
import clsx from "clsx";

export type FoodTruckProps = {
    applicant: string,
    address?: string,
    description?: string,
}

// source: https://tw-elements.com/docs/react/components/cards/
const FoodTruck = ({ applicant, address, description }: FoodTruckProps) => {
    const [isLoading, setIsLoading] = useState(true);

    return (<>
        <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
            {isLoading && <Spinner className="flex items-center justify-center h-96 w-full md:h-auto md:min-w-[192px] md:max-w-[192px] pl-6" fill="fill-gray-600" />}
            <Image
                width={500}
                height={500}
                className={clsx(!!isLoading && 'opacity-0 absolute z-[-1]', "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg")}
                onLoad={() => setIsLoading(prev => !prev)}
                src="/food-truck.jpg"
                alt="" />
            <div className={"flex flex-col justify-start p-6"}>
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
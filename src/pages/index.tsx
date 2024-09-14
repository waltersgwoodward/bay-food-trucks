import FoodTrucksList from '@/components/FoodTrucksList';
import useSWR from 'swr';

const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('An error occurred while fetching the data.');
  }

  return res.json()
}

export default function Home() {
  const response = useSWR("https://data.sfgov.org/resource/rqzj-sfat.json", fetcher, { shouldRetryOnError: false }) || {};

  return <FoodTrucksList response={response}/>;
}

import Image from "next/image";
import getAnalytics from '@/services/getAnalytics'

export default async function Home() {
  const data = await getAnalytics()
  return (
    <h1 className="text-white text-xl">{data}</h1>
  );
}

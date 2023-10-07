import Link from "next/link";
import Image from "next/image";
import { InfluencerRecommendationCard } from "./influencer_recommendaton_card";
export const InfluencerRecommendationCardList = (): React.ReactNode => {
    return (
        <>
            <div className="flex space-x-4">
                <InfluencerRecommendationCard />
                <div className="relative h-40 w-64 bg-white border">
                    <p className="absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-medium truncate px-4 pt-6 max-w-full">HIKAKIN</p>
                    <p className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-l font-medium font-serif truncate px-6 max-w-full">items for youtuber</p>

                    <Link href="/product" className='absolute w-full h-full'>
                        <Image
                            alt="test"
                            src="/photo-1606107557195-0e29a4b5b4aa.jpeg"
                            width={50}
                            height={50}
                            className="rounded-full border object-cover h-14 w-14 m-auto my-4"
                        ></Image>

                    </Link>
                </div >
            </div>

        </>
    );
}
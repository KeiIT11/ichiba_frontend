import Head from "next/head";
import Image from "next/image";
import { HomeNavBar } from "@/app/_components/Header/navbar";
import { HomeFooter } from "@/app/_components/Footer/footer";
import { allInfluencerInformation } from "@/app/_constants/influencers_information";
import { Iinfluencer_recommendItem } from "@/app/_types/influencer_list_info";
import { getAllInfluencerRecommendations } from "@/app/_helpers/getAllInfluencerRecommendations";
export const dynamicParams = false // true | false,

export function generateStaticParams() {
    //now we use static influencername,
    const influencerNameList = []
    for (const key of Object.keys(allInfluencerInformation)) {
        influencerNameList.push(key)
    }
    return influencerNameList
}

interface ApiResponse {
    GenreInformation: {
        children: any[];
        current: any[];
        parent: any[];
    };
    Products: {
        Product: {
            genreName: string;
            productName: string;
            productCaption: string;
            mediumImageUrl: string;
            averagePrice: number;
            itemCount: number;
            reviewAverage: number;
            productUrlPC: string;
        };
    }[];
}



export default function InfluencerPage({ params }: { params: { influencername: string } }) {
    const influencer_name = params.influencername
    const influencerInformation = allInfluencerInformation[influencer_name as keyof Object]
    const allProductInformation = getAllInfluencerRecommendations(influencerInformation.recommendItems)

    return (
        <>
            <Head>
                <title>test</title>
            </Head>
            <body>
                <HomeNavBar />
                <main className='max-w-3xl mx-auto flex flex-col p-2 space-y-8'>
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src={influencerInformation.imageURL}
                            alt="ProfileIcon"
                            width={100}
                            height={24}
                            className="rounded-full border h-20 w-20 object-cover"
                        />
                        <p>{influencerInformation.name}</p>
                        <p>{influencerInformation.forWhom}</p>
                    </div>

                    <p>{influencerInformation.introductionText}</p>

                    {/* prototype this shows page layout */}
                    {influencerInformation.recommendItems.map((recommendItem: Iinfluencer_recommendItem) => {
                        return (
                            <div className="flex space-x-6">
                                <Image
                                    src={"/black.jpg"}
                                    alt="ProfileIcon"
                                    width={100}
                                    height={24}
                                    className="rounded-full border h-20 w-20 object-cover"
                                />
                                <p>{recommendItem.itemExplanation}</p>
                            </div>
                        )
                    })}
                    <p>{influencerInformation.conclusionText}</p>
                </main>
                <HomeFooter />
            </body>
        </>
    )
}
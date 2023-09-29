import Head from "next/head";
import { HomeNavBar } from "@/app/_components/Header/navbar";
import { HomeFooter } from "@/app/_components/Footer/footer";
import { getPersonaRecommendationItems } from "../_helpers/getPersonaRecommendationItems";
import { allPersonaRecommendationGenraList } from "../_constants/recommended_genra_list";
import { RecommendedItemCardList } from "../_components/Elements/recommend_itemcard_list";

export default function Home() {
  const newLifeRecommendationItems = getPersonaRecommendationItems(allPersonaRecommendationGenraList.newLife);

  return (
    <>
      <Head>
        <title>test</title>
      </Head>
      <body className="">
        <HomeNavBar />
        <main className='px-6 py-4 space-y-3'>
          <h2 className="text-2xl font-light pt-2">
            We can recommend you good items.
          </h2>
          <p>who are you?</p>
          <p>New grad?   Get Married? </p>
          <h2 className="text-2xl font-light pt-2">Items for New life</h2>
          <RecommendedItemCardList personaRecommendationItems={newLifeRecommendationItems} />

          <h2 className="text-2xl font-light pt-4">Influencer's recomendation</h2>
          <RecommendedItemCardList personaRecommendationItems={newLifeRecommendationItems} />

        </main>
        <HomeFooter />
      </body>
    </>
  )
}

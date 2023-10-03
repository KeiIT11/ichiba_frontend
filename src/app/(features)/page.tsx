import Head from "next/head";
import { HomeNavBar } from "@/app/_components/Header/navbar";
import { HomeFooter } from "@/app/_components/Footer/footer";
import { getPersonaRecommendationItems } from "../_helpers/getPersonaRecommendationItems";
import { allPersonaRecommendationGenraList } from "../_constants/recommended_genra_list";
import { RecommendedItemCardList } from "../_components/Elements/recommend_itemcard_list";
import { InfluencerRecommendationCard } from "@/app/_components/Elements/influencer_recommendaton_card"
import { InfluencerRecommendationCardList } from "../_components/Elements/influencer_recommendation_cardlist";
import { PersonaCard } from "../_components/Elements/persona_card";

export default function Home() {
  const newLifeRecommendationItems = getPersonaRecommendationItems(allPersonaRecommendationGenraList.newLife);
  const dailyGoodsRecommendationItems = getPersonaRecommendationItems(allPersonaRecommendationGenraList.dailyGoods);
  return (
    <>
      <Head>
        <title>test</title>
      </Head>
      <body className="">
        <HomeNavBar />
        <main className='px-6 py-4 space-y-3'>
          <h2 className="text-2xl font-medium pt-2">Items for New life</h2>
          <RecommendedItemCardList personaRecommendationItems={newLifeRecommendationItems} />
          <h2 className="text-2xl font-medium pt-2">Daily Goods</h2>
          <RecommendedItemCardList personaRecommendationItems={dailyGoodsRecommendationItems} />

          <h2 className="text-2xl font-medium pt-4">Influencer's recomendation</h2>
          {/* <InfluencerRecommendationCard /> */}
          <InfluencerRecommendationCardList />
          <h2 className="text-2xl font-light pt-2">
            Who are you?
          </h2>
          <p>We can recommend you good items.</p>
          <PersonaCard />
        </main>

        <HomeFooter />
      </body>
    </>
  )
}

import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { HomeNavBar } from "@/app/_components/Header/navbar";
import { HomeFooter } from "@/app/_components/Footer/footer";
import Link from "next/link";
import { RecommendedItemCard } from "../_components/Elements/recommend_itemcard";
export default function Home() {
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
          <RecommendedItemCard />
          <h2 className="text-2xl font-light pt-4">Influencer's recomendation</h2>
          <RecommendedItemCard />
        </main>
        <HomeFooter />
      </body>
    </>
  )
}

import Head from "next/head";
import { HomeNavBar } from "@/app/_components/Header/navbar";
import { HomeFooter } from "@/app/_components/Footer/footer";
import PurchaseList from "../../_components/Elements/purchase_list";

export default function ProductSamplePage() {
  return (
    <>
      <Head>
        <title>test</title>
      </Head>
      <body>
        <HomeNavBar />
        <main className="flex p-2">
          <div>
            <h1 className="text-2xl font-bold">
              Recommendation for Getting Married
            </h1>
            <PurchaseList />
          </div>
        </main>
        <HomeFooter />
      </body>
    </>
  );
}

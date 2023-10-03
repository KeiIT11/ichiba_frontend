import Head from "next/head";
import { HomeNavBar } from "@/app/_components/Header/navbar";
import { HomeFooter } from "@/app/_components/Footer/footer";
import { CategoryCard } from "@/app/_components/Elements/category_card";

export default function CategoryPage() {
    return (
        <>
            <Head>
                <title>test</title>
            </Head>
            <body>
                <HomeNavBar />
                <main className='px-6 py-4 space-y-3'>
                    <h2 className="text-2xl font-medium pt-2">Category</h2>
                    {/* <p>category page</p> */}
                    <CategoryCard />
                </main>
                <HomeFooter />
            </body>
        </>
    )
}
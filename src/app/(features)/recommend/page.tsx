import Head from "next/head";
import { HomeNavBar } from "@/app/_components/Header/navbar";
import { HomeFooter } from "@/app/_components/Footer/footer";

export default function ProductSamplePage() {
    return (
        <>
            <Head>
                <title>test</title>
            </Head>
            <body>
                <HomeNavBar />
                <main className='flex p-2'>
                    <p>individual product page</p>
                </main>
                <HomeFooter />
            </body>
        </>
    )
}
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { HomeNavBar } from "@/app/_components/Header/navbar";
import { HomeFooter } from "@/app/_components/Footer/footer";
import Link from "next/link";

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
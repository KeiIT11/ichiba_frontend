import dynamic from "next/dynamic";
import Head from "next/head";
import HomeNavBar from "@/app/_components/Header/navbar";
import HomeFooter from "@/app/_components/Footer/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>test</title>
      </Head>
      <body>

        <HomeNavBar />

        <main className='min-h-screen'>
          <div className="max-w-md mx-auto py-10 md:max-w-2xl">
            <p className="whitespace-pre-wrap">
              content
            </p>
          </div>
        </main>

        <HomeFooter />

      </body>
    </>
  )
}

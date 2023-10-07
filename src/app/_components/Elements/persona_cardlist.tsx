import Image from "next/image";
import Link from "next/link";

export const PersonaCardList = (): React.ReactNode => {
    return (
        <>
            <div className="relative h-60 w-60 bg-white border">
                <div className="">
                    <Image
                        alt="test"
                        // src="/photo-1606107557195-0e29a4b5b4aa.jpeg"
                        src="/marriage.jpg"
                        // width={300}
                        // height={150}
                        className=""
                        // className="p-4"
                        layout="fill"
                    // objectFit="contain"
                    ></Image>
                </div>


                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-60 p-16 backdrop-blur-[2px]"></div>
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-medium font-serif">get married</p>
                <Link href="/product" className='absolute w-full h-full'>
                </Link>
            </div >
        </>
    );
}
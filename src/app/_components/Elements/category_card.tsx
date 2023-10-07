import Image from "next/image";
import Link from "next/link";

export const CategoryCard = (): React.ReactNode => {
    return (
        <>
            <div className="flex flex-col w-60 bg-white border">
                <div className="">
                    <Image
                        alt="test"
                        // src="/photo-1606107557195-0e29a4b5b4aa.jpeg"
                        src="/marriage.jpg"
                        width={50}
                        height={50}
                        className="w-60"
                    // className="p-4"
                    //layout="fill"
                    // objectFit="contain"
                    ></Image>
                </div>

                <p className="text-xl font-medium font-serif">wedding dress</p>
                {/* <div className="bg-green-500 mask mask-star mask-half-1"></div> */}
                <div className="rating rating-md rating-half">
                    {/* <input type="radio" name="rating-10" className="rating-hidden" /> */}
                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star mask-half-2" />
                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star mask-half-2" />
                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star mask-half-2" />
                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star mask-half-2" />
                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star mask-half-1" />
                    <input type="radio" name="rating-10" className="bg-green-500 mask mask-star mask-half-2" />
                </div>
                <p> (1990)</p>
                <p>1190円</p>
                <button className="btn btn-outline">Add to Cart</button>

                {/* <Link href="/product" className='absolute w-full h-full'>
                </Link> */}
            </div >
        </>
    );
}
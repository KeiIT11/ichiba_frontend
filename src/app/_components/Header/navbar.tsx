"use client";
import Image from "next/image";
import Link from "next/link";
import logo_image from "../../../../public/RAKITEN_LOGO.webp";
import { useRouter } from "next/navigation";

export const HomeNavBar = () => {
  const router = useRouter();
  return (
    <header>
      <div className="navbar px-10 p-2 shadow-md ">
        {/* <Link href="/" className="btn btn-ghost normal-case text-xl">
          Rakuten New Life
        </Link> */}
        <Image
          src={logo_image}
          alt="Logo of Rakuten"
          height={100}
          width={100}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />

        <div className="md:px-20"></div>

        <div className="form-control w-full">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-[70%]"
            />
            <button className="btn btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>

        </div>

        <div className="md:px-4"></div>

        <Link href="/login" className="btn btn-outline border">
          Login
        </Link>
      </div>
    </header>
  );
};

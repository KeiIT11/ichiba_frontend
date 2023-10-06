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

        <div className="md:px-12"></div>

        <div className="form-control w-full">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-[70%]"
          />
        </div>

        <div className="md:px-12"></div>

        <Link href="/login" className="btn">
          Login
        </Link>
      </div>
    </header>
  );
};

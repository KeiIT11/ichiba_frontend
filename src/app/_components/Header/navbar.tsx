"use client";
import Image from "next/image";
import logo_image from "../../../../public/RAKITEN_LOGO.webp";
import { useRouter } from "next/navigation";
import useLoginModal from "@/app/hooks/useLoginModal";

export const HomeNavBar = () => {
  const router = useRouter();
  const loginmodal = useLoginModal();
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
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn ">
              Recommmendation
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={() => router.push(`/recommendations/1`)}>
                  New Grads
                </a>
              </li>
              <li>
                <a onClick={() => router.push(`/recommendations/2`)}>
                  Relocators
                </a>
              </li>
              <li>
                <a onClick={() => router.push(`/recommendations/3`)}>Married</a>
              </li>
              <li>
                <a onClick={() => router.push(`/recommendations/4`)}>
                  Foreigners
                </a>
              </li>
            </ul>
          </div>

          <a className="btn" onClick={() => loginmodal.onOpen()}>
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

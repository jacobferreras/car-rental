"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
import Link from "next/link";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const { getUser, isLoading } = useKindeBrowserClient();
  const user = getUser();

  return (
    <div className="fixed navbar bg-[#182448] backdrop-blur-lg shadow-sm z-50">
      <div className="navbar-start">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col"></div>
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu bg-[#1c2634] min-h-full w-80 p-4">
            <h1 className="text-2xl font-bold mb-4 flex justify-between items-center">
              InstaDrive
              <span>
                <ImCross
                  className="text-2xl pt-1"
                  aria-label="Close menu"
                  onClick={() => {
                    const drawer = document.getElementById(
                      "my-drawer-3"
                    ) as HTMLInputElement;
                    if (drawer) drawer.checked = false;
                  }}
                  style={{ cursor: "pointer" }}
                />
              </span>
            </h1>
            <li>
              <Link
                href="/"
                className="hover:underline hover:text-blue-500 hover:bg-transparent text-xl font-bold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/vehicles"
                className="hover:underline hover:text-blue-500 hover:bg-transparent text-xl font-bold"
              >
                Vehicles
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:underline hover:text-blue-500 hover:bg-transparent text-xl font-bold"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:underline hover:text-blue-500 hover:bg-transparent text-xl font-bold"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">InstaDrive</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold font-family-sans">
          <li>
            <Link
              href="/"
              className="hover:underline hover:text-blue-500 hover:bg-transparent text-md"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/vehicles"
              className="hover:underline hover:text-blue-500 hover:bg-transparent text-md"
            >
              Vehicles
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:underline hover:text-blue-500 hover:bg-transparent text-md"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:underline hover:text-blue-500 hover:bg-transparent text-md"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {isLoading ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  alt="User avatar"
                  src={
                    user.picture || "https://www.gravatar.com/avatar/?d=mp&s=64"
                  }
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Bookings</a>
              </li>
              <li>
                <LogoutLink>Logout</LogoutLink>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <LoginLink className="btn btn-xs sm:btn-sm md:btn-md ">
              Sign In
            </LoginLink>
            <RegisterLink className="btn btn-xs sm:btn-sm md:btn-md">
              Sign Up
            </RegisterLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

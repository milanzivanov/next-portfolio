"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeSwitch from "../ThemeSwitch";

function Navigation({ toggleMobileNav }) {
  const path = usePathname();

  return (
    <nav>
      <ul className=" gap-9 items-center hidden md:flex">
        <li>
          <Link
            href="/"
            className={`text-lg  capitalize hover:text-blue-600 hover:dark:text-blue-400 ${
              path === "/"
                ? "text-blue-600 dark:text-blue-400 font-semibold"
                : "text-grey-600 dark:text-grey-300"
            }`}
          >
            home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`text-lg capitalize hover:text-blue-600 hover:dark:text-blue-400 ${
              path === "/about"
                ? "text-blue-600 dark:text-blue-400 font-semibold"
                : "text-grey-600 dark:text-grey-300"
            }`}
          >
            about
          </Link>
        </li>
        <li>
          <Link
            href="/skills"
            className={`text-lg capitalize hover:text-blue-600 hover:dark:text-blue-400 ${
              path === "/skills"
                ? "text-blue-600 dark:text-blue-400 font-semibold"
                : "text-grey-600 dark:text-grey-300"
            }`}
          >
            skills
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className={`text-lg capitalize hover:text-blue-600 hover:dark:text-blue-400 ${
              path === "/portfolio"
                ? "text-blue-600 dark:text-blue-400 font-semibold"
                : "text-grey-600 dark:text-grey-300"
            }`}
          >
            portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`text-lg capitalize hover:text-blue-600 hover:dark:text-blue-400 ${
              path === "/contact"
                ? "text-blue-600 dark:text-blue-400 font-semibold"
                : "text-grey-600 dark:text-grey-300"
            }`}
          >
            contact
          </Link>
        </li>
        <li>
          <Link href="#">
            <ThemeSwitch />
          </Link>
        </li>
      </ul>
      <button onClick={toggleMobileNav} className="flex md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </button>
    </nav>
  );
}

export default Navigation;

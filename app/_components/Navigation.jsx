"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Navigation({ toggleMobileNav }) {
  const path = usePathname();

  return (
    <nav>
      <ul className=" gap-4 items-center hidden md:flex">
        <li>
          <Link
            href="/"
            className={`text-lg md:text-xl capitalize text-grey-600 hover:text-blue-600 ${
              path === "/" ? "active" : ""
            }`}
          >
            home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`text-lg md:text-xl capitalize text-grey-600 hover:text-blue-600 ${
              path === "/about" ? "active" : ""
            }`}
          >
            about
          </Link>
        </li>
        <li>
          <Link
            href="/skills"
            className={`text-lg md:text-xl capitalize text-grey-600 hover:text-blue-600 ${
              path === "/skills" ? "active" : ""
            }`}
          >
            skills
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className={`text-lg md:text-xl capitalize text-grey-600 hover:text-blue-600 ${
              path === "/portfolio" ? "active" : ""
            }`}
          >
            portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`text-lg md:text-xl capitalize text-grey-600 hover:text-blue-600 ${
              path === "/contact" ? "active" : ""
            }`}
          >
            contact
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

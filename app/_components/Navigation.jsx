"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Navigation() {
  const path = usePathname();

  return (
    <nav>
      <ul className="flex gap-4 items-center">
        <li>
          <Link
            href="/"
            className={`text-lg capitalize text-grey-600 hover:text-blue-600 ${
              path === "/" ? "active" : ""
            }`}
          >
            home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`text-lg capitalize text-grey-600 hover:text-blue-600 ${
              path === "/about" ? "active" : ""
            }`}
          >
            about
          </Link>
        </li>
        <li>
          <Link
            href="/skills"
            className={`text-lg capitalize text-grey-600 hover:text-blue-600 ${
              path === "/skills" ? "active" : ""
            }`}
          >
            skills
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className={`text-lg capitalize text-grey-600 hover:text-blue-600 ${
              path === "/portfolio" ? "active" : ""
            }`}
          >
            portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`text-lg capitalize text-grey-600 hover:text-blue-600 ${
              path === "/contact" ? "active" : ""
            }`}
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

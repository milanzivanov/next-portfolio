import Link from "next/link";

function ButtonBack({ children, href }) {
  return (
    <>
      <Link
        href={href}
        className="flex items-center w-full md:w-auto justify-center rounded-md bg-blue-500 dark:bg-blue-700 hover:bg-blue-800 text-gray-100 px-6 py-3 text-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>

        <span>{children}</span>
      </Link>
    </>
  );
}

export default ButtonBack;

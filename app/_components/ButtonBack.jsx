import Link from "next/link";
import { FaArrowCircleLeft } from "react-icons/fa";

function ButtonBack({ children, href }) {
  return (
    <>
      <Link
        href={href}
        className="flex items-center w-full md:w-auto justify-center rounded-md bg-blue-500 dark:bg-blue-700 hover:bg-blue-800 text-gray-100 px-6 py-3 text-lg"
      >
        <FaArrowCircleLeft className="size-5 mr-2" />

        <span>{children}</span>
      </Link>
    </>
  );
}

export default ButtonBack;

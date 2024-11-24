import Link from "next/link";

function NotFound() {
  return (
    <main className="bg-gray-800 flex items-center flex-col justify-center h-[calc(100dvh-80px)] text-center space-y-6">
      <h1 className="text-3xl text-gray-200 font-semibold">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        className="inline-block bg-blue-500 rounded-md text-gray-100 px-6 py-3 text-lg"
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;

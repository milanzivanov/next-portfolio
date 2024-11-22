import Link from "next/link";

function NotFound() {
  return (
    <main className="bg-gray-800 text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        className="inline-block bg-orange-500 text-gray-800 px-6 py-3 text-lg"
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;

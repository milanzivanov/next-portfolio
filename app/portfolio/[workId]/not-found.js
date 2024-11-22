import Link from "next/link";

function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">
        This portfolio project could not be found :(
      </h1>
      <Link
        href="/portfolio"
        className="inline-block bg-orange-500 text-gray-800 px-6 py-3 text-lg"
      >
        Go back to portfolio
      </Link>
    </main>
  );
}

export default NotFound;

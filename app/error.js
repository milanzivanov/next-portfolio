"use client";

import Link from "next/link";

export default function Error({ error }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <Link
        href="/"
        className="inline-block bg-orange-500 text-gray-800 px-6 py-3 text-lg"
      >
        Go back home
      </Link>
    </main>
  );
}

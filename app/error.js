"use client";

import Link from "next/link";

export default function Error({ error }) {
  return (
    <main className="flex justify-center h-[calc(100dvh-86px)] items-center flex-col gap-6">
      <h1 className="text-3xl tracking-wider font-semibold">
        Something went wrong!
      </h1>
      <p className="text-lg">{error.message}</p>

      <Link
        href="/"
        className="inline-block bg-blue-500 hover:bg-blue-600 text-gray-200 rounded-md px-6 py-3 text-lg"
      >
        Go back home
      </Link>
    </main>
  );
}

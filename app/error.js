"use client";

import Link from "next/link";
import ButtonBack from "./_components/ButtonBack";

export default function Error({ error }) {
  return (
    <main className="flex justify-center h-[calc(100dvh-86px)] items-center flex-col gap-6">
      <h1 className="text-3xl tracking-wider font-semibold">
        Something went wrong!
      </h1>
      <p className="text-lg">{error.message}</p>

      <ButtonBack href="/">Go back to home</ButtonBack>
    </main>
  );
}

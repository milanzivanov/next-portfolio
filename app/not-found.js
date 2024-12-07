import Link from "next/link";
import ButtonBack from "./_components/ButtonBack";

function NotFound() {
  return (
    <main className="bg-gray-800 flex items-center flex-col justify-center h-[calc(100dvh-86px)] text-center space-y-6">
      <h1 className="text-3xl text-gray-200 font-semibold">
        This page could not be found :(
      </h1>
      <ButtonBack href="/">Go back home</ButtonBack>
    </main>
  );
}

export default NotFound;

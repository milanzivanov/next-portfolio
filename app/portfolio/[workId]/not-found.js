import ButtonBack from "@/app/_components/ButtonBack";
import Link from "next/link";

function NotFound() {
  return (
    <main className="bg-gray-800 flex items-center flex-col justify-center h-[calc(100dvh-86px)] text-center space-y-6">
      <h1 className="text-3xl text-gray-200 font-semibold">
        This portfolio project could not be found :(
      </h1>
      <ButtonBack href="/portfolio">Go back to portfolio</ButtonBack>
    </main>
  );
}

export default NotFound;

import Link from "next/link";
import { useInsideClick } from "../_hooks/useInsideClick";

export default function MobileNavigation({ isOpen, setMobileNavOpen }) {
  const ref = useInsideClick(setMobileNavOpen, false);

  if (!isOpen) return null;

  return (
    <nav
      ref={ref}
      className="absolute inset-0 bg-slate-800 text-white h-screen z-30 flex justify-center items-center flex-col gap-4"
    >
      <ul className="space-y-5 text-xl">
        <li onClick={() => setMobileNavOpen(false)}>
          <Link href="/">Home</Link>
        </li>
        <li onClick={() => setMobileNavOpen(false)}>
          <Link href="/about">About</Link>
        </li>
        <li onClick={() => setMobileNavOpen(false)}>
          <Link href="/skills">Skills</Link>
        </li>
        <li onClick={() => setMobileNavOpen(false)}>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li onClick={() => setMobileNavOpen(false)}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

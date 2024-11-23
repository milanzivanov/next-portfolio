import Link from "next/link";

export default function MobileNavigation({ isOpen, setMobileNavOpen }) {
  if (!isOpen) return null;

  return (
    <nav className="absolute inset-0 bg-slate-800 text-white h-screen z-30 flex justify-center items-center flex-col gap-4">
      <ul className="space-y-4 text-xl">
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

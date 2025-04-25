import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";
import { useInsideClick } from "../../_hooks/useInsideClick";

export default function MobileNavigation({ isOpen, setMobileNavOpen }) {
  const ref = useInsideClick(setMobileNavOpen, false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          ref={ref}
          className="absolute inset-0 bg-slate-800 dark:bg-slate-900 text-white h-screen z-30 flex justify-center items-center flex-col gap-4"
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
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

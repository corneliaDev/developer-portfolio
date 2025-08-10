// components/ui/BurgerNav.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "./Link";
import { Menu, X } from "lucide-react"; // Optional: replace with your own icons

export default function BurgerNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="desktop:hidden z-50">
      <button
        onClick={toggleMenu}
        className="text-primary focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key="menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white/95 dark:bg-black/95 absolute top-18 right-0  bg-background border w-screen h-screen flex flex-col items-center justify-center gap-8"
          >
            <li>
              <Link to="/#home" onClick={toggleMenu}>
                Home{" "}
              </Link>
            </li>
            <li>
              <Link to="/#aboutMe" onClick={toggleMenu}>
                About me
              </Link>
            </li>
            <li>
              <Link to="/#experience" onClick={toggleMenu}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="/#projects" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/#contact" onClick={toggleMenu}>
                Contact me
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

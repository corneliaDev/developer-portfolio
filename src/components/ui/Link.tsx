/* import { motion } from "framer-motion";

type LinkProps = {
  link: string;
  text: string;
  onClick?: () => void; // Optional click handler for internal links
};

export default function Link({ link, text, onClick }: LinkProps) {
  return (
    <motion.a
      onClick={onClick}
      href={link}
      className="text-dark dark:text-white hover:text-primary dark:hover:text-primary uppercase font-bold text-small border-b-2 border-b-primary py-2.5 cursor-pointer inline-block"
      target={link.startsWith("#") ? "" : "_blank"}
      whileHover={{ scale: 1.1 }} // scale on hover
      whileTap={{ scale: 0.95 }} // slight shrink on tap
      transition={{ type: "spring", stiffness: 100 }}
    >
      {text}
    </motion.a>
  );
} */

// src/components/ui/Link.tsx
// src/components/ui/Link.tsx
// src/components/ui/Link.tsx
import React from "react";
import { motion } from "framer-motion";
import { MotionRouterLink } from "./MotionRouterLink";

type Props = {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const motionProps = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 100 },
} as const;

export default function Link({ to, children, onClick, className = "" }: Props) {
  const isExternal = !to.startsWith("/") && !to.startsWith("#");
  const baseClass =
    "text-dark dark:text-white hover:text-primary dark:hover:text-primary " +
    "uppercase font-bold border-b-2 border-b-primary py-2.5 inline-block " +
    className;

  if (isExternal) {
    return (
      <motion.a
        {...motionProps}
        className={baseClass}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <MotionRouterLink
      {...motionProps}
      className={baseClass}
      to={to}
      onClick={onClick}
    >
      {children}
    </MotionRouterLink>
  );
}

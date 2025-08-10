import { motion } from "framer-motion";

import Link from "../ui/Link";
import ApplicationPhoto from "../ui/ApplicationPhoto";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col tablet:flex-row justify-between items-center tablet:items-start pt-48 gap-8"
    >
      {/* Decorative Image */}
      <img
        src="/images/pattern-rings.svg"
        alt="decorative rings"
        className="invert dark:invert-0 absolute top-8 tablet:top-40 left-0 -translate-x-1/2 tablet:-translate-x-[70%] desktop:-translate-x-[40%] z-10"
      />

      {/* Content section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center tablet:text-left max-w-xl flex-1 tablet:mt-8"
      >
        <h1 className="text-heading-xl leading-tight">
          Hi, I&apos;m{" "}
          <span className="border-b-4 tablet:border-b-6 border-b-primary ">
            Cornelia
          </span>
        </h1>
        <p className="text-body mt-6 tablet:mt-8 desktop:mt-12">
          You have the idea — I code your vision into clean, modern web
          experiences. Based in Germany, I'm a front-end developer passionate
          about building web apps.
        </p>

        <div className="mt-8 tablet:mt-9 desktop:mt-12">
          <Link to="#contact" className="text-small">
            {" "}
            Contact me
          </Link>
        </div>
      </motion.div>

      {/* Application Photo */}
      <motion.figure
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-44 tablet:w-80 desktop:w-[27.8125rem] h-auto"
      >
        <ApplicationPhoto />
      </motion.figure>
    </section>
  );
}

import Link from "./Link";

export default function Header() {
  return (
    <header className="flex flex-col items-center tablet:items-start mx-4 tablet:mx-[1.875rem] desktop:mx-[10.3125rem] tablet:mt-[1.875rem] desktop:mt-[6rem] relative ">
      <img
        src="/images/pattern-rings.svg"
        alt="background pattern rings"
        className="absolute -top-[14rem] tablet:top-0 left-0 -translate-x-[50%] -translate-y-[50%] z-[-1]"
      />
      <div className="relative mt-10 tablet:mt-0 text-center tablet:text-left w-[21.4375rem] tablet:w-[27.8125rem] desktop:w-[44.125rem] ">
        <h1 className="text-h1Mobile tablet:text-h1Tablet desktop:text-h1 ">
          Nice to <span className="tablet:inline-block">meet you!</span>
          <span className="desktop:hidden">&nbsp;</span>
          <span className="inline-block tablet:inline desktop:inline-block">
            I&apos;m{" "}
          </span>
          <span className="tablet:hidden desktop:inline-block">&nbsp;</span>
          <span className="border-b-4 tablet:border-b-[0.375rem] border-b-primDGreen inline-block leading-tight tablet:leading-[5.25rem]">
            Cornelia
          </span>
        </h1>
        <p className="text-bodyMobil tablet:text-body text-lightGray mt-6 tablet:mt-12 text-center tablet:text-left ">
          Based in Germany, I&apos;m a front-end developer{" "}
          <span className="tablet:block">
            passionate about building web apps{" "}
          </span>
          <span className="tablet:block">that users love.</span>
        </p>
      </div>
      <div className="self-center tablet:self-start mt-6 tablet:mt-[2.125rem] desktop:mt-12">
        <Link link="#contact" text="contact me" />
      </div>
    </header>
  );
}

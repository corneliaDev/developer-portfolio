import ContactForm from "./ContactForm";
import LogoSection from "./LogoSection";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-darkGray mt-20 tablet:mt-[6.25rem] desktop:mt-[8.75rem] desktop:pb-[3.125rem] relative"
    >
      <div className="mx-4 tablet:mx-[1.875rem] desktop:mx-[10.3125rem] flex flex-col items-center desktop:items-start justify-center desktop:flex-row desktop:justify-between mt-[3.75rem] desktop:mt-[5.25rem] mb-[5.4375rem] tablet:mb-[5.75rem]">
        <img
          src="/images/pattern-rings.svg"
          alt="background pattern rings"
          className="absolute bottom-[18rem] tablet:bottom-[8.125rem] desktop:bottom-[13.6875rem] left-0 -translate-x-1/2 tablet:-translate-x-[70%] desktop:-translate-x-[40%] z-10"
        />
        <div className="flex-1 text-center desktop:text-start">
          <h2 className="text-h1Mobile tablet:text-h1Tablet desktop:text-h1 ">
            Contact
          </h2>
          <p className="text-bodyMobil tablet:text-body text-lightGray pt-5 desktop:pt-9">
            I would love to hear about your project and how I{" "}
            <span className="tablet:block">
              could help. Please fill in the form, and I&apos;ll get back{" "}
            </span>{" "}
            to you as soon as possible.
          </p>
        </div>
        <div className="w-full mt-[3.125rem] desktop:mt-0 desktop:flex-grow-0 tablet:w-[27.8125rem] desktop:self-end">
          <ContactForm />
        </div>
      </div>
      <div className="tablet:mx-0 border-t border-lightGray pt-4 pb-8 tablet:pb-0 tablet:pt-0 ">
        <LogoSection />
      </div>
    </section>
  );
}

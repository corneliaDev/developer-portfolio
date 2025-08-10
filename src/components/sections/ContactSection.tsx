import ContactForm from "../ui/ContactForm";

export default function ContactSection() {
  return (
    <section className="flex flex-col items-center desktop:flex-row desktop:items-start desktop:justify-center mt-16 desktop:mt-20 mb-20 tablet:mb-24">
      {/* Text Block */}
      <div className="flex-1 text-start">
        <h2 className="text-heading-xl ">Contact</h2>
        <p className="mt-5 desktop:mt-9 text-body tablet:max-w-[27.8125rem]">
          - currently only for training purposes - I would love to hear about
          your project and how I could help. Please fill in the form, and I'll
          get back to you as soon as possible. Alternatively, feel free to
          contact me directly via email at
          <a
            href="mailto:your.email@example.com"
            className="underline text-primary ml-1"
          >
            cmueller.mail@t-online.com
          </a>
          .
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full tablet:w-[27.8125rem] mt-12 desktop:mt-0 desktop:flex-grow-0 desktop:self-end">
        <ContactForm />
      </div>
    </section>
  );
}

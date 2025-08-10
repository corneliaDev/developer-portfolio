import ContactSection from "../sections/ContactSection";
import Footer from "./Footer";

export default function ContactContainer() {
  return (
    <div
      id="contact"
      className="scroll-mt-48 flex-col items-center justify-between relative w-full px-4 desktop:px-40 bg-light dark:bg-dark desktop:pb-12"
    >
      {/* Decorative Image */}
      <img
        src="/images/pattern-rings.svg"
        alt="decorative rings"
        className="absolute bottom-[18rem] tablet:bottom-32 desktop:bottom-56 left-0 -translate-x-1/2 tablet:-translate-x-[70%] desktop:-translate-x-[40%] z-10"
      />

      {/* Main Content Container */}
      <ContactSection />

      <div className="border-t border-dark dark:border-light pt-4 pb-8 tablet:pt-0 tablet:pb-0">
        <Footer />
      </div>
    </div>
  );
}

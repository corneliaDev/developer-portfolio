import ExperienceList from "../ui/ExperienceList";

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-48 relative ">
      {/* Decorative Image */}
      <img
        src="/images/pattern-rings.svg"
        alt="background pattern rings"
        className="hidden tablet:block absolute bottom-0 right-0 translate-y-[50%] translate-x-[50%] z-10"
      />
      {/* Experience List */}
      <ExperienceList />
    </section>
  );
}

import { experienceList } from "../lib/data";
import Experience from "./Experience";

export default function ExperienceList() {
  return (
    <section className="relative mx-4 tablet:mx-[1.875rem] desktop:mx-[10.3125rem] mt-20 desktop:mt-[16rem]">
      <img
        src="/images/pattern-rings.svg"
        alt="background pattern rings"
        className="absolute bottom-0 right-0 translate-y-[50%] translate-x-[50%] z-10"
      />
      <ul className="grid grid-rows-2 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 tablet:gap-y-[3.25rem] desktop:gap-y-[3.625rem] tablet:gap-x-[2.4375rem] pt-10 pb-10 tablet:pb-0 tablet:pt-[3.25rem] desktop:pt-[4.5rem] border-y border-lightGray tablet:border-b-0">
        {experienceList.map((item) => (
          <Experience item={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
}

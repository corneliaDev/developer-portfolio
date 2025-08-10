import { experienceList } from "@/lib/data";
import Experience from "./Experience";

export default function ExperienceList() {
  return (
    <>
      {/* Experience List */}
      <ul className="grid grid-rows-2 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 tablet:gap-y-[3.25rem] desktop:gap-y-[3.625rem] tablet:gap-x-[2.4375rem] pt-10 pb-10 tablet:pb-0 tablet:pt-[3.25rem] desktop:pt-[4.5rem] border-y border-dark dark:border-light tablet:border-b-0">
        {experienceList.map((item) => (
          <Experience item={item} key={item.id} />
        ))}
      </ul>
    </>
  );
}

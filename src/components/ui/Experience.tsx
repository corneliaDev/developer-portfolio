import { ExperienceItem } from "@/lib/types";

type ExperienceProps = {
  item: ExperienceItem;
};

export default function Experience({ item }: ExperienceProps) {
  return (
    <li className="w-[21.5625rem] text-center tablet:text-left">
      <p className="text-heading-lg">{item.language}</p>
      <p className="text-body tablet:mt-[0.875rem]"> {item.experience}</p>
    </li>
  );
}

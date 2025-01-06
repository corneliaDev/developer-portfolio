import { ExperienceItem } from "../lib/types";

type ExperienceProps = {
  item: ExperienceItem;
};

export default function Experience({ item }: ExperienceProps) {
  return (
    <li className="w-[21.5625rem] text-center tablet:text-left">
      <h3 className="text-h2Mobile tablet:text-h2">{item.language}</h3>
      <p className="text-bodyMobil tablet:text-body text-lightGray tablet:mt-[0.875rem]">
        {" "}
        {item.experience}
      </p>
    </li>
  );
}

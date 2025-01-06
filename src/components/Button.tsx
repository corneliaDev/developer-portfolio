import clsx from "clsx";

type ButtonProps = {
  text: string;
  disabled?: boolean;
};

export default function Button({ text, disabled }: ButtonProps) {
  return (
    <button
      className={clsx(
        "uppercase font-bold text-small border-b-2 border-b-primDGreen py-2.5 hover:text-primDGreen active:text-primDGreen focus:outline-none scroll-smooth",
        {
          "text-darkGray": disabled === true,
          " text-white": disabled !== true,
        }
      )}
    >
      {text}
    </button>
  );
}

import clsx from "clsx";

type ButtonProps = {
  text: string;
  disabled?: boolean;
};

export default function Button({ text, disabled }: ButtonProps) {
  return (
    <button
      className={clsx(
        "uppercase font-bold text-small border-b-2 border-b-primary py-2.5 hover:text-primary active:text-primary focus:outline-none hover:scale-105 transition-all duration-300",
        {
          "text-white dark:text-dark": disabled === true,
          "text-dark dark:text-white": disabled !== true,
        }
      )}
    >
      {text}
    </button>
  );
}

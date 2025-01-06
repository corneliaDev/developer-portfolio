type LinkProps = {
  link: string;
  text: string;
};

export default function Link({ link, text }: LinkProps) {
  return (
    <a
      href={link}
      className="uppercase font-bold text-small border-b-2 border-b-primDGreen py-2.5 hover:text-primDGreen active:text-primDGreen cursor-pointer inline-block"
      target={link.startsWith("#") ? "" : "_blank"}
    >
      {text}
    </a>
  );
}

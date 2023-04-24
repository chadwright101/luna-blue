import Link from "next/link";
import Image from "next/image";

interface Props {
  cssClasses?: string;
  url: string;
}

const Button = ({ cssClasses, url }: Props) => {
  return (
    <Link
      href={url}
      className={`flex gap-2 uppercase text-14px text-pureBlack font-350 tracking-widest ${cssClasses}`}
    >
      Read more
      <Image
        src="/icons/plus.svg"
        alt="Plus sign icon"
        width={13}
        height={13}
        className="-translate-y-[1.5px]"
      />
    </Link>
  );
};

export default Button;

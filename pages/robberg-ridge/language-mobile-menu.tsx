import { useRouter } from "next/router";
import Link from "next/link";

import classNames from "classnames";

const LanguageMobileMenu = () => {
  const { pathname, query, asPath, locale } = useRouter();

  return (
    <li className="mb-4 flex gap-8">
      <Link
        href={{ pathname, query }}
        as={asPath}
        locale="en"
        className={classNames("p-3 -m-3", {
          "px-3 pt-2 pb-1.5 -mx-3 -my-2 border-brown border-2 font-500":
            locale === "en",
        })}
      >
        English
      </Link>
      <Link
        href={{ pathname, query }}
        as={asPath}
        locale="de"
        className={classNames("p-3 -m-3", {
          "px-3 pt-2 pb-1.5 -mx-3 -my-2 border-brown border-2 font-500":
            locale === "de",
        })}
      >
        Deutsch
      </Link>
    </li>
  );
};

export default LanguageMobileMenu;

import { useRouter } from "next/router";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  german: string;
}

const Translated = ({ children, german }: Props) => {
  const { locale } = useRouter();
  if (locale === "en") {
    return <>{children}</>;
  } else {
    return <>{german}</>;
  }
};

export default Translated;

import Image from "next/image";
import { Icons } from "@/components/icons";
import { ArrowBackWrapper } from "./styled";

export const ArrowBack = () => {
  const goUserBack = () => {
    window.history.go(-1);
  };

  return (
    <ArrowBackWrapper onClick={() => goUserBack()}>
      <Image src={Icons.ArrowBack} alt="Back Arrow" width={75} height={75} />
    </ArrowBackWrapper>
  );
};

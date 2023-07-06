import Image from "next/image";
import { Icons } from "../icons";
import { ArrowBackWrapper } from "./styled";

export const ArrowBack = () => {
  return (
    <ArrowBackWrapper onClick={() => history.back()}>
      <Image src={Icons.ArrowBack} alt="Back Arrow" width={75} height={75} />
    </ArrowBackWrapper>
  );
};

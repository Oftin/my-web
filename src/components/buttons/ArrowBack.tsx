import Image from "next/image";
// import { useRouter } from "next/navigation";
import { Icons } from "@/components/icons";
import { ArrowBackWrapper } from "./styled";

export const ArrowBack = () => {
  // const router = useRouter();

  const goUserBack = () => {
    window?.history.back();
  };

  return (
    <ArrowBackWrapper onClick={() => goUserBack()}>
      <Image src={Icons.ArrowBack} alt="Back Arrow" width={75} height={75} />
    </ArrowBackWrapper>
  );
};

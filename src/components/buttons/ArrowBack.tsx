import Image from "next/image";
import { useRouter } from "next/navigation";
import { Icons } from "@/components/icons";
import { ArrowBackWrapper } from "./styled";

export const ArrowBack = () => {
  const router = useRouter();

  return (
    <ArrowBackWrapper onClick={() => router.back()}>
      <Image src={Icons.ArrowBack} alt="Back Arrow" width={75} height={75} />
    </ArrowBackWrapper>
  );
};

import Image from "next/image";
import { Icons } from "@/components/icons";
import { ArrowProps } from "./types";
import { ArrowWrapper, WhiteArrow } from "./styled";

export const Arrow = ({ orientation, showArrowhead = true }: ArrowProps) => {
  return (
    <ArrowWrapper orientation={orientation}>
      <WhiteArrow orientation={orientation} $showArrowhead={showArrowhead} />
      {orientation === "horizontal"
        ? showArrowhead && (
            <Image src={Icons.RightArrowTriangle} alt={""} width={15} />
          )
        : showArrowhead && (
            <Image src={Icons.DownArrowTriangle} alt={""} width={15} />
          )}
    </ArrowWrapper>
  );
};

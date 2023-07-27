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
            <Image
              src={Icons.RightArrowTriangle}
              alt="RightArrowTriangle"
              width={16}
            />
          )
        : showArrowhead && (
            <Image
              src={Icons.DownArrowTriangle}
              alt="DownArrowTriangle"
              width={16}
            />
          )}
    </ArrowWrapper>
  );
};

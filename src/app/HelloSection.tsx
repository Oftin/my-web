import { Icons } from "@/components/icons";
import { FlexColumn, TwoColumn } from "@/components/wrappers/columns";
import Image from "next/image";

export const HelloSection = () => {
  return (
    <TwoColumn gap={10}>
      <FlexColumn items={"start"} justify={"center"}>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </FlexColumn>

      <FlexColumn items={"center"} justify={"center"}>
        <Image
          src={Icons.HexagonIcon}
          alt="Hexagon Icon"
          width={530}
          height={540}
        />
      </FlexColumn>
    </TwoColumn>
  );
};

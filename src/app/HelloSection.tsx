import Image from "next/image";
import { CallToActionButton } from "@/components/buttons";
import { Icons } from "@/components/icons";
import { TextParagraph } from "@/components/text";
import { TitleSection } from "@/components/titleSection";
import { FlexColumn, Column } from "@/components/wrappers/columns";

interface HelloSectionProps {
  backgroundColor: string;
}

export const HelloSection = ({ backgroundColor }: HelloSectionProps) => (
  <Column
    numberOfColumns={2}
    gap={10}
    styles={`max-height: 100vh; background-color: ${backgroundColor}`}
    layoutMargin
  >
    <FlexColumn
      items="start"
      justify="center"
      styles="height: 100vh; width: 100%;"
    >
      <TitleSection
        upperText="Hello, I'm"
        mainText="Kamil Bobrowski"
        lowerText="Front-end Developer"
      />

      <TextParagraph text="Optimistic programmer, passionate about modern technologies. I continuously develop my skills and see challenges where others see problems." />

      <CallToActionButton name={"Contact Me"} href={"/"} />
    </FlexColumn>

    <FlexColumn items={"center"} justify={"center"}>
      <Image
        src={Icons.HexagonIcon}
        alt="Hexagon Icon"
        width={530}
        height={540}
      />
    </FlexColumn>
  </Column>
);

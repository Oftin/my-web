import Image from "next/image";
import { FlexColumn, Column } from "@/components/wrappers/columns";
import { Icons } from "@/components/icons";
import { TitleSection } from "@/components/titleSection";
import { TextParagraph } from "@/components/text";
import { CallToActionButton } from "@/components/buttons";

interface AboutSectionProps {
  backgroundColor: string;
}

export const AboutSection = ({ backgroundColor }: AboutSectionProps) => {
  return (
    <Column
      numberOfColumns={2}
      gap={10}
      styles={`max-height: 100vh; background-color: ${backgroundColor}`}
      layoutMargin
    >
      <FlexColumn items="center" justify="center">
        <Image
          src={Icons.HexagonIcon}
          alt="Hexagon Icon"
          width={530}
          height={540}
        />
      </FlexColumn>

      <FlexColumn
        items="start"
        justify="center"
        styles="height: 100vh; width: 100%;"
      >
        <TitleSection upperText="My Intro" mainText="About Me" />

        <TextParagraph text="I'm a master of science in Automation and Robotics." />
        <TextParagraph text="I studied at the University of Silesia." />

        <CallToActionButton name="Read More" href="/about" />
      </FlexColumn>
    </Column>
  );
};

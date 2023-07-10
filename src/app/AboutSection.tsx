import Image from "next/image";
import { FlexColumn, Column } from "@/components/wrappers/columns";
import { TitleSection } from "@/components/titleSection";
import { TextParagraph } from "@/components/text";
import { CallToActionButton } from "@/components/buttons";
import { scrollUserToTopView } from "@/helpers";
import { Images } from "@/components/images";

interface AboutSectionProps {
  backgroundColor: string;
}

export const AboutSection = ({ backgroundColor }: AboutSectionProps) => {
  return (
    <Column
      columns={2}
      gap={10}
      styles={`max-height: 100vh; background-color: ${backgroundColor}`}
      extraSpaceFromEdgeOfScreen={true}
    >
      <FlexColumn items="center" justify="center">
        <Image
          src={Images.ERC2019MyPhoto}
          alt=""
          width={500}
          style={{
            borderRadius: "8px",
          }}
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

        <CallToActionButton
          name="Read More"
          href="/about"
          onClick={() => scrollUserToTopView()}
        />
      </FlexColumn>
    </Column>
  );
};

import Image from "next/image";
import { PagePosition } from "@/components/wrappers/pagePosition";
import { Position } from "@/components/wrappers/position";
import { Column } from "@/components/wrappers/column";
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
    <PagePosition backgroundColor={backgroundColor} paddingPlus id="about">
      <Column columns={2} gap={10} styles={`max-height: 100vh;`}>
        <Position>
          <Image
            src={Images.ERC2019MyPhoto}
            alt=""
            width={500}
            style={{
              borderRadius: "8px",
            }}
          />
        </Position>

        <Position alignItems="start" styles="height: 100vh; width: 100%;">
          <TitleSection upperText="My Intro" mainText="About Me" />

          <TextParagraph text="I'm a master of science in Automation and Robotics." />
          <TextParagraph text="I studied at the University of Silesia." />

          <CallToActionButton
            name="Read More"
            href="/about"
            onClick={() => scrollUserToTopView()}
          />
        </Position>
      </Column>
    </PagePosition>
  );
};

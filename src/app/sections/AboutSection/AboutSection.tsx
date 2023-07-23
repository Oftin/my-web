import Image from "next/image";
import { PagePosition } from "@/components/wrappers/pagePosition";
import { TitleSection } from "@/components/titleSection";
import { TextParagraph } from "@/components/text";
import { CallToActionButton } from "@/components/buttons";
import { scrollUserToTopView } from "@/helpers";
import { Images } from "@/components/images";
import { AboutSectionWrapper, LeftSide, RigthSide } from "./styled";
import { AboutSectionProps } from "./types";

export const AboutSection = ({ backgroundColor }: AboutSectionProps) => {
  return (
    <PagePosition backgroundColor={backgroundColor} paddingPlus id="about">
      <AboutSectionWrapper>
        <LeftSide>
          <Image
            src={Images.ERC2019MyPhoto}
            alt=""
            width={500}
            style={{
              borderRadius: "8px",
            }}
          />
        </LeftSide>

        <RigthSide>
          <TitleSection
            upperText="My Intro"
            mainText="About Me"
            width="240px"
          />

          <TextParagraph
            text="I'm a master of science in Automation and Robotics. I studied at the University of Silesia."
            size="16px"
            width="310px"
          />

          <CallToActionButton
            name="Read More"
            href="/about"
            onClick={() => scrollUserToTopView()}
          />
        </RigthSide>
      </AboutSectionWrapper>
    </PagePosition>
  );
};

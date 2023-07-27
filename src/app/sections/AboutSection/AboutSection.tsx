import { PagePosition } from "@/components/wrappers/pagePosition";
import { TitleSection } from "@/components/titleSection";
import { TextParagraph } from "@/components/text";
import { CallToActionButton } from "@/components/buttons";
import { Images } from "@/components/images";
import { Image } from "@/components/Modifiers";
import { AboutSectionWrapper, LeftSide, RigthSide } from "./styled";
import { AboutSectionProps } from "./types";

export const AboutSection = ({ backgroundColor }: AboutSectionProps) => {
  return (
    <PagePosition backgroundColor={backgroundColor} paddingPlus id="about">
      <AboutSectionWrapper>
        <LeftSide>
          <Image src={Images.ERC2019MyPhoto} alt="ERC2019MyPhoto" />
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

          <CallToActionButton name="Read More" href="/about#top" />
        </RigthSide>
      </AboutSectionWrapper>
    </PagePosition>
  );
};

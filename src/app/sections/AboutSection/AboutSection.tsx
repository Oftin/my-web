import { PagePosition } from "@/components/wrappers/pagePosition";
import { CallToActionButton } from "@/components/buttons";
import { Images } from "@/components/images";
import { Image } from "@/components/Modifiers";
import {
  AboutSectionWrapper,
  LeftSide,
  RigthSide,
  MainText,
  SecondText,
  TextParagraph,
} from "./styled";
import { AboutSectionProps } from "./types";

export const AboutSection = ({ backgroundColor }: AboutSectionProps) => {
  return (
    <PagePosition backgroundColor={backgroundColor} paddingPlus id="about">
      <AboutSectionWrapper>
        <LeftSide>
          <Image src={Images.ERC2019MyPhoto} alt="ERC2019MyPhoto" />
        </LeftSide>

        <RigthSide>
          <SecondText>
            <div>My</div>
            <div>Intro</div>
          </SecondText>
          <MainText>
            <div>About</div>
            <div>Me</div>
          </MainText>

          <TextParagraph>
            I&apos;m a master of science in Automation and Robotics. I studied
            at the Silesian University of Technology.
          </TextParagraph>

          <CallToActionButton name="Read More" href="/about#top" />
        </RigthSide>
      </AboutSectionWrapper>
    </PagePosition>
  );
};

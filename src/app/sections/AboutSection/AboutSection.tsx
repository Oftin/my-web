import { PagePosition } from "@/components/wrappers/pagePosition";
import { CallToActionButton } from "@/components/buttons";
import { Images } from "@/components/images";
import { Image } from "@/components/Modifiers";
import { MainText, SecondText, TextParagraph } from "@/components/text";

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
          <SecondText>
            <div>My</div>
            <div>Intro</div>
          </SecondText>
          <MainText>
            <div>About</div>
            <div>Me</div>
          </MainText>

          <TextParagraph
            $width={["300px", "400px", "500px", "500px"]}
            $marginTop="1rem"
            $marginBottom={["2rem", "2.5rem", "2.5rem", "2.5rem"]}
          >
            I&apos;m a master of science in Automation and Robotics. I studied
            at the Silesian University of Technology.
          </TextParagraph>

          <CallToActionButton name="Read More" href="/about#top" />
        </RigthSide>
      </AboutSectionWrapper>
    </PagePosition>
  );
};

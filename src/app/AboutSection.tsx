import Image from "next/image";
import { PagePosition } from "@/components/wrappers/pagePosition";
import { Position } from "@/components/wrappers/position";
import { Column } from "@/components/wrappers/column";
import { TitleSection } from "@/components/titleSection";
import { TextParagraph } from "@/components/text";
import { CallToActionButton } from "@/components/buttons";
import { scrollUserToTopView } from "@/helpers";
import { Images } from "@/components/images";
import styled from "styled-components";

interface AboutSectionProps {
  backgroundColor: string;
}

const AboutSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-items: center;

  @media only screen and (max-width: 992px) {
    /* margin-top: 8rem;
    margin-bottom: 4rem; */
  }

  @media only screen and (min-width: 992px) {
    height: 100vh;

    flex-direction: row;
    justify-content: space-around;
  }
`;

const LeftSide = styled.div`
  @media only screen and (max-width: 992px) {
    margin-top: 6rem;
    order: 1;
    align-items: center;
  }
`;

const RigthSide = styled.div`
  width: 390px;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 992px) {
    margin: 2rem;
  }
`;

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

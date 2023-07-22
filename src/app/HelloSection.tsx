import Image from "next/image";
import { Link as ReactScrollLink } from "react-scroll";
import { PagePosition } from "@/components/wrappers/pagePosition";
import { TextParagraph, Text } from "@/components/text";
import { TitleSection } from "@/components/titleSection";
import { Position } from "@/components/wrappers/position";
import { Column } from "@/components/wrappers/column";
import { Images } from "@/components/images";
import { ContactButton } from "./styled";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "@/styles/colors";

interface HelloSectionProps {
  backgroundColor: string;
}

const HelloSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-items: center;

  @media only screen and (max-width: 992px) {
    margin-top: 8rem;
  }

  @media only screen and (min-width: 992px) {
    height: 100vh;

    flex-direction: row;
    justify-content: space-between;
  }
`;

const LeftSide = styled.div`
  @media only screen and (max-width: 992px) {
    margin-bottom: 4rem;
  }
`;

const RigthSide = styled.div`
  @media only screen and (max-width: 992px) {
    margin: 2rem;
  }
`;

export const HelloSection = ({ backgroundColor }: HelloSectionProps) => (
  <PagePosition backgroundColor={backgroundColor} paddingPlus id="hello">
    <HelloSectionWrapper>
      <LeftSide>
        <TitleSection
          upperText="Hello, I'm"
          mainText="Kamil Bobrowski"
          lowerText="Front-end Developer"
          width="390px"
        />

        <TextParagraph
          text="Optimistic programmer, passionate about modern technologies. I continuously develop my skills and see challenges where others see problems."
          size="16px"
          width="385px"
        />

        <ReactScrollLink to={"contact"} spy={true} smooth={true} duration={500}>
          <ContactButton>Contact Me</ContactButton>
        </ReactScrollLink>
      </LeftSide>

      <RigthSide>
        <Image
          src={Images.MyMainPhoto}
          alt="Hexagon Icon"
          width={500}
          style={{
            borderRadius: "8px",
          }}
        />
      </RigthSide>
    </HelloSectionWrapper>
  </PagePosition>
);

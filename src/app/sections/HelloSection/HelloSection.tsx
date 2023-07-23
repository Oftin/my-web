import Image from "next/image";
import { Link as ReactScrollLink } from "react-scroll";
import { PagePosition } from "@/components/wrappers/pagePosition";
import { TextParagraph, Text } from "@/components/text";
import { TitleSection } from "@/components/titleSection";
import { Images } from "@/components/images";
import {
  HelloSectionWrapper,
  LeftSide,
  ContactButton,
  RigthSide,
} from "./styled";
import { HelloSectionProps } from "./types";

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

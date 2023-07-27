import { PagePosition } from "@/components/wrappers/pagePosition";
import { Images } from "@/components/images";
import {
  HelloSectionWrapper,
  LeftSide,
  ContactButton,
  RigthSide,
  MainText,
  SecondText,
  TextParagraph,
} from "./styled";
import { HelloSectionProps } from "./types";
import { Image } from "@/components/Modifiers";

export const HelloSection = ({ backgroundColor }: HelloSectionProps) => (
  <PagePosition backgroundColor={backgroundColor} paddingPlus id="hello">
    <HelloSectionWrapper>
      <LeftSide>
        <SecondText>
          <div>Hello,</div>
          <div>I&apos;m</div>
        </SecondText>
        <MainText>
          <div>Kamil</div>
          <div>Bobrowski</div>
        </MainText>
        <SecondText>
          <div>Front-end</div>
          <div>Developer</div>
        </SecondText>

        <TextParagraph>
          Optimistic programmer, passionate about modern technologies. I
          continuously develop my skills and see challenges where others see
          problems.
        </TextParagraph>

        <ContactButton to={"contact"} spy={true} smooth={true} duration={500}>
          Contact Me
        </ContactButton>
      </LeftSide>

      <RigthSide>
        <Image src={Images.MyMainPhoto} alt={"MyMainPhoto"} />
      </RigthSide>
    </HelloSectionWrapper>
  </PagePosition>
);

import { PagePosition } from "@/components/wrappers/pagePosition";
import { Images } from "@/components/images";
import { MainText, SecondText, TextParagraph } from "@/components/text";
import { HelloSectionWrapper, LeftSide, ContactButton, RigthSide } from "./styled";
import { HelloSectionProps } from "./types";
import { Image } from "@/components/Modifiers";

export const HelloSection = ({ backgroundColor }: HelloSectionProps) => {
  return (
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
            <div>Software</div>
            <div>Developer</div>
          </SecondText>

          <TextParagraph $width={["70vw", "70vw", "70vw", "600px"]} $marginTop="1rem" $marginBottom={["2rem", "2.5rem", "2.5rem", "2.5rem"]}>
            Optimistic programmer, passionate about modern technologies. I continuously develop my skills and seeing challenges where others see problems.
          </TextParagraph>

          <ContactButton to="contact" spy={true} smooth={true} duration={500}>
            Contact Me
          </ContactButton>
        </LeftSide>

        <RigthSide>
          <Image src={Images.MyMainPhoto} alt="MyMainPhoto" />
        </RigthSide>
      </HelloSectionWrapper>
    </PagePosition>
  );
};

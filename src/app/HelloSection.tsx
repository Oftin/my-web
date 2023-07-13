import Image from "next/image";
import { Link as ReactScrollLink } from "react-scroll";
import { TextParagraph } from "@/components/text";
import { TitleSection } from "@/components/titleSection";
import { FlexColumn, Column } from "@/components/wrappers/columns";
import { Images } from "@/components/images";
import { ContactButton } from "./styled";

interface HelloSectionProps {
  backgroundColor: string;
}

export const HelloSection = ({ backgroundColor }: HelloSectionProps) => (
  <Column
    columns={2}
    gap={10}
    styles={`max-height: 100vh; background-color: ${backgroundColor}`}
    extraSpaceFromEdgeOfScreen={true}
    id="hello"
  >
    <FlexColumn
      items="start"
      justify="center"
      styles="height: 100vh; width: 100%;"
    >
      <TitleSection
        upperText="Hello, I'm"
        mainText="Kamil Bobrowski"
        lowerText="Front-end Developer"
      />

      <TextParagraph text="Optimistic programmer, passionate about modern technologies." />
      <TextParagraph text="I continuously develop my skills and see challenges where others see problems." />

      <ReactScrollLink to={"contact"} spy={true} smooth={true} duration={500}>
        <ContactButton>Contact Me</ContactButton>
      </ReactScrollLink>
    </FlexColumn>

    <FlexColumn items="center" justify="center">
      <Image
        src={Images.MyMainPhoto}
        alt="Hexagon Icon"
        width={500}
        style={{
          borderRadius: "8px",
        }}
      />
    </FlexColumn>
  </Column>
);

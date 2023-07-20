import Image from "next/image";
import { Link as ReactScrollLink } from "react-scroll";
import { PagePosition } from "@/components/wrappers/pagePosition";
import { TextParagraph } from "@/components/text";
import { TitleSection } from "@/components/titleSection";
import { Position } from "@/components/wrappers/position";
import { Column } from "@/components/wrappers/column";
import { Images } from "@/components/images";
import { ContactButton } from "./styled";

interface HelloSectionProps {
  backgroundColor: string;
}

export const HelloSection = ({ backgroundColor }: HelloSectionProps) => (
  <PagePosition backgroundColor={backgroundColor} paddingPlus id="hello">
    <Column columns={2} gap={10}>
      <Position styles="height: 100vh; width: 100%;">
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
      </Position>

      <Position>
        <Image
          src={Images.MyMainPhoto}
          alt="Hexagon Icon"
          width={500}
          style={{
            borderRadius: "8px",
          }}
        />
      </Position>
    </Column>
  </PagePosition>
);

import { PagePosition } from "@/components/wrappers/pagePosition";
import { Text } from "@/components/text";
import { colors } from "@/styles/colors";
import { Icons } from "@/components/icons";
import { Image } from "@/components/Modifiers";
import { CallToActionButton } from "@/components/buttons";
import { Arrow } from "@/components/arrow";
import { MainText, SecondText, TextParagraph } from "@/components/text";
import {
  ExperienceSectionWrapper,
  TimeLineHorizontalForLargeScreenWidth,
  TimeLineVerticalForSmallScreenWidth,
  Heading,
  ArrowWrapper,
  FourColumns,
  FiveRows,
  TextPosition,
  IconWrapper,
  SmallScreenContentWrapper,
  ButtonWrapper,
} from "./styled";
import { ExperienceSectionProps } from "./types";

const horizontalArray = [
  {
    first: "",
    second: <Text text="2017-10 - 2019-08" color={colors.greenThemeColor} size="20px" centerText />,
    third: <Image src={Icons.GreenDotWithRing} alt="GreenDotWithRing" />,
    fourth: <Image src={Icons.ArrowDown} alt="" />,
    fifth: (
      <TextPosition>
        <Text text="Technical Support Engineer" color={colors.white} size="20px" centerText />
        <Text text="UPC Polska" color={colors.grayText} size="20px" centerText />
      </TextPosition>
    ),
  },
  {
    first: (
      <TextPosition>
        <Text text="Robotic Engineer" color={colors.white} size="20px" centerText />
        <Text text="RW Swiss Automation" color={colors.grayText} size="20px" centerText />
      </TextPosition>
    ),
    second: <Image src={Icons.ArrowUp} alt="" />,
    third: <Image src={Icons.GreenDotWithRing} alt="GreenDotWithRing" />,
    fourth: <Text text="2019-09 - 2020-05" color={colors.greenThemeColor} size="20px" centerText />,
    fifth: "",
  },
  {
    first: "",
    second: <Text text="2021-05 - 2021-06" color={colors.greenThemeColor} size="20px" centerText />,
    third: <Image src={Icons.GreenDotWithRing} alt="GreenDotWithRing" />,
    fourth: <Image src={Icons.ArrowDown} alt="" />,
    fifth: (
      <TextPosition>
        <Text text="Technical support" color={colors.white} size="20px" centerText />
        <Text text="SR Robotics" color={colors.grayText} size="20px" centerText />
      </TextPosition>
    ),
  },
  {
    first: (
      <TextPosition>
        <Text text="Junior React Developer" color={colors.white} size="20px" centerText />
        <Text text="LEOCODE" color={colors.grayText} size="20px" centerText />
      </TextPosition>
    ),
    second: <Image src={Icons.ArrowUp} alt="" />,
    third: <Image src={Icons.GreenDotWithRing} alt="GreenDotWithRing" />,
    fourth: <Text text="2021-10 - 2023-12" color={colors.greenThemeColor} size="20px" centerText />,
    fifth: "",
  },
];

const verticalArray = [
  {
    company: "LEOCODE",
    date: "2021-10 - 2023-12",
    role: "Junior React Developer",
    svg: Icons.Programming,
  },
  {
    company: "SR Robotics",
    date: "2021-05 - 2021-06",
    role: "Technical support",
    svg: Icons.UnderwaterScooter,
  },
  {
    company: "RW Swiss Automation",
    date: "2019-09 - 2020-05",
    role: "Robotic Engineer",
    svg: Icons.IndustryRobot,
  },
  {
    company: "UPC Polska",
    date: "2017-10 - 2019-08",
    role: "Technical Support Engineer",
    svg: Icons.Support,
  },
];

export const ExperienceSection = ({ backgroundColor }: ExperienceSectionProps) => {
  return (
    <PagePosition backgroundColor={backgroundColor} paddingPlus id="experience">
      <ExperienceSectionWrapper>
        <Heading>
          <SecondText>Last</SecondText>
          <MainText $color={colors.greenThemeColor}>Experience</MainText>
        </Heading>

        <TimeLineHorizontalForLargeScreenWidth>
          <FourColumns>
            <ArrowWrapper>
              <Arrow orientation="horizontal" />
            </ArrowWrapper>

            {horizontalArray.map((exp) => {
              return (
                <FiveRows key={`${exp.fourth}`}>
                  <div>{exp.first}</div>
                  <div>{exp.second}</div>
                  <div>{exp.third}</div>
                  <div>{exp.fourth}</div>
                  <div>{exp.fifth}</div>
                </FiveRows>
              );
            })}
          </FourColumns>
        </TimeLineHorizontalForLargeScreenWidth>

        <TimeLineVerticalForSmallScreenWidth>
          {verticalArray.map((exp) => {
            return (
              <SmallScreenContentWrapper key={exp.company + 1}>
                <div>
                  <TextParagraph $color={colors.white}>{exp.role}</TextParagraph>
                  <TextParagraph $color={colors.greenThemeColor}>{exp.date}</TextParagraph>
                  <TextParagraph>{exp.company}</TextParagraph>
                </div>
                <IconWrapper>
                  <Image src={exp.svg} alt="svgIcon" />
                </IconWrapper>
              </SmallScreenContentWrapper>
            );
          })}
        </TimeLineVerticalForSmallScreenWidth>

        <ButtonWrapper>
          <CallToActionButton name="Read More" href="/experience#top" />
        </ButtonWrapper>
      </ExperienceSectionWrapper>
    </PagePosition>
  );
};

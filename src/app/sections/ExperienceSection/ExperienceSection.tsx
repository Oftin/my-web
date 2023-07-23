import Image from "next/image";
import { PagePosition } from "@/components/wrappers/pagePosition";
import { Text } from "@/components/text";
import { colors } from "@/styles/colors";
import { Icons } from "@/components/icons";
import { CallToActionButton } from "@/components/buttons";
import { scrollUserToTopView } from "@/helpers";
import { Arrow } from "@/components/arrow";
import {
  ExperienceSectionWrapper,
  TimeLineHorizontalForLargeScreenWidth,
  TimeLineVerticalForSmallScreenWidth,
  Heading,
  ArrowWrapper,
  FourColumns,
  FiveRows,
  TextPosition,
} from "./styled";
import { ExperienceSectionProps } from "./types";

const horizontalArray = [
  {
    first: "",
    second: (
      <Text
        text="2017-10 - 2019-08"
        color={colors.greenThemeColor}
        size="20px"
        centerText
      />
    ),
    third: (
      <Image
        src={Icons.GreenDotWithRing}
        alt=""
        style={{
          zIndex: 800,
          width: "26px",
          height: "26px",
        }}
      />
    ),
    fourth: <Image src={Icons.ArrowDown} alt="" />,
    fifth: (
      <TextPosition>
        <Text
          text="Technical Support Engineer"
          color={colors.white}
          size="20px"
          centerText
        />
        <Text
          text="UPC Polska"
          color={colors.grayText}
          size="20px"
          centerText
        />
      </TextPosition>
    ),
  },
  {
    first: (
      <TextPosition>
        <Text
          text="Robotic Engineer"
          color={colors.white}
          size="20px"
          centerText
        />
        <Text
          text="RW Swiss Automation"
          color={colors.grayText}
          size="20px"
          centerText
        />
      </TextPosition>
    ),
    second: <Image src={Icons.ArrowUp} alt="" />,
    third: (
      <Image
        src={Icons.GreenDotWithRing}
        alt=""
        style={{
          zIndex: 800,
        }}
      />
    ),
    fourth: (
      <Text
        text="2019-09 - 2020-05"
        color={colors.greenThemeColor}
        size="20px"
        centerText
      />
    ),
    fifth: "",
  },
  {
    first: "",
    second: (
      <Text
        text="2021-05 - 2021-06"
        color={colors.greenThemeColor}
        size="20px"
        centerText
      />
    ),
    third: (
      <Image
        src={Icons.GreenDotWithRing}
        alt=""
        style={{
          zIndex: 800,
        }}
      />
    ),
    fourth: <Image src={Icons.ArrowDown} alt="" />,
    fifth: (
      <TextPosition>
        <Text
          text="Technical support"
          color={colors.white}
          size="20px"
          centerText
        />
        <Text
          text="SR Robotics"
          color={colors.grayText}
          size="20px"
          centerText
        />
      </TextPosition>
    ),
  },
  {
    first: (
      <TextPosition>
        <Text
          text="Junior React Developer"
          color={colors.white}
          size="20px"
          centerText
        />
        <Text text="LEOCODE" color={colors.grayText} size="20px" centerText />
      </TextPosition>
    ),
    second: <Image src={Icons.ArrowUp} alt="" />,
    third: (
      <Image
        src={Icons.GreenDotWithRing}
        alt=""
        style={{
          zIndex: 800,
        }}
      />
    ),
    fourth: (
      <Text
        text="2021-10 - 2023-07"
        color={colors.greenThemeColor}
        size="20px"
        centerText
      />
    ),
    fifth: "",
  },
];

const verticalArray = [
  {
    company: "UPC Polska",
    date: "2017-10 - 2019-08",
    role: "Technical Support Engineer",
    showArrowhead: false,
  },
  {
    company: "RW Swiss Automation",
    date: "2019-09 - 2020-05",
    role: "Robotic Engineer",
    showArrowhead: false,
  },
  {
    company: "SR Robotics",
    date: "2021-05 - 2021-06",
    role: "Technical support",
    showArrowhead: false,
  },
  {
    company: "LEOCODE",
    date: "2021-10 - 2023-06",
    role: "Junior React Developer",
    showArrowhead: true,
  },
];

export const ExperienceSection = ({
  backgroundColor,
}: ExperienceSectionProps) => {
  return (
    <PagePosition backgroundColor={backgroundColor} paddingPlus id="experience">
      <ExperienceSectionWrapper>
        <Heading>
          <Text text="Last" color={colors.greenThemeColor} size="32px" />
          <Text text="Experience" color={colors.white} size="48px" />
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
              <>
                <div
                  key={exp.company}
                  style={{
                    height: "100%",
                    width: "100%",
                    position: "relative",
                    placeItems: "end",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "absolute",
                      left: "30%",
                    }}
                  >
                    <Arrow
                      orientation="vertical"
                      showArrowhead={exp.showArrowhead}
                    />
                  </div>
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "absolute",
                      top: "41%",
                      left: "75.5%",
                    }}
                  >
                    <Image
                      src={Icons.GreenDotWithRing}
                      alt={""}
                      style={{
                        zIndex: 899,
                      }}
                    />
                  </div>
                </div>

                <div
                  key={exp.company + 1}
                  style={{
                    margin: "2rem 0",
                  }}
                >
                  <Text text={exp.role} color={colors.white} size={"20px"} />
                  <Text
                    text={exp.date}
                    color={colors.greenThemeColor}
                    size={"20px"}
                    styles="margin: 0.5rem 0;"
                  />
                  <Text
                    text={exp.company}
                    color={colors.grayText}
                    size={"20px"}
                  />
                </div>
              </>
            );
          })}
        </TimeLineVerticalForSmallScreenWidth>

        <div
          style={{
            marginTop: "4rem",
          }}
        >
          <CallToActionButton
            name="Read More"
            href="/experience"
            onClick={() => scrollUserToTopView()}
          />
        </div>
      </ExperienceSectionWrapper>
    </PagePosition>
  );
};

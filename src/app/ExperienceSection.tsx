import Image from "next/image";
import { PagePosition } from "@/components/wrappers/pagePosition";
import { GreenAndWhiteText, Text } from "@/components/text";
import { Position } from "@/components/wrappers/position";
import { colors } from "@/styles/colors";
import { Icons } from "@/components/icons";
import { DisplayGrid } from "@/components/wrappers/displays";
import { CallToActionButton } from "@/components/buttons";
import { scrollUserToTopView } from "@/helpers";
import { Arrow } from "@/components/arrow";
import styled from "styled-components";
import { TitleSection } from "@/components/titleSection";

interface ExperienceSectionProps {
  backgroundColor: string;
}

const ExperienceSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  justify-self: center;
  padding-top: 6em;
  padding-bottom: 6em;

  @media only screen and (min-width: 992px) {
    height: 100vh;
  }
`;

const TimeLineHorizontalForLargeScreenWidth = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 992px) {
    visibility: hidden;
    display: none;
  }
`;

const TimeLineVerticalForSmallScreenWidth = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
  /* background-color: red; */

  display: grid;
  grid-template-columns: 2fr 3fr;
  width: 80%;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 992px) {
    visibility: hidden;
    display: none;
  }
`;

const Heading = styled.div`
  width: 100%;
  padding-bottom: 4em;

  @media only screen and (max-width: 992px) {
    padding-left: 8em;
  }
`;

const ArrowWrapper = styled.div`
  position: absolute;
  justify-items: center;
  align-items: center;
  width: 90vw;
  margin-bottom: 4px;
`;

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
      <Position>
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
      </Position>
    ),
  },
  {
    first: (
      <Position>
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
      </Position>
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
      <Position>
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
      </Position>
    ),
  },
  {
    first: (
      <Position>
        <Text
          text="Junior React Developer"
          color={colors.white}
          size="20px"
          centerText
        />
        <Text text="LEOCODE" color={colors.grayText} size="20px" centerText />
      </Position>
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
          <DisplayGrid numberOfColumn={4}>
            <ArrowWrapper>
              <Arrow orientation="horizontal" />
            </ArrowWrapper>

            {horizontalArray.map((exp) => {
              return (
                <DisplayGrid numberOfRows={5} key={`${exp.fourth}`}>
                  <div>{exp.first}</div>
                  <div>{exp.second}</div>
                  <div>{exp.third}</div>
                  <div>{exp.fourth}</div>
                  <div>{exp.fifth}</div>
                </DisplayGrid>
              );
            })}
          </DisplayGrid>
        </TimeLineHorizontalForLargeScreenWidth>

        <TimeLineVerticalForSmallScreenWidth>
          {verticalArray.map((exp) => {
            return (
              <>
                <div
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

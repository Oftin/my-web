import Image from "next/image";
import { PagePosition } from "@/components/wrappers/pagePosition";
import { CallToActionButton } from "@/components/buttons";
import { WhiteAndGreenText, GreenAndWhiteText, Text } from "@/components/text";
import { Position } from "@/components/wrappers/position";
import { colors } from "@/styles/colors";
import { Icons } from "@/components/icons";
import { scrollUserToTopView } from "@/helpers";
import { Images } from "@/components/images";
import { Arrow } from "@/components/arrow";
import styled from "styled-components";

const EducationSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding-top: 6em;
  padding-bottom: 6em;
`;

const TitleWrapper = styled.div`
  @media only screen and (min-width: 1300px) {
    width: 100%;
  }
`;

const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ArrowPosition = styled.div`
  position: absolute;
  height: 60%;
  margin-top: 4rem;

  @media only screen and (max-width: 1300px) {
    height: 60%;
  }
`;

const StudyTime = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 4rem;

  @media only screen and (max-width: 1300px) {
    grid-template-columns: 1fr;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 15% 1fr;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1300px) {
    grid-template-columns: 15% 1fr 15%;
  }
`;

interface EducationSectionProps {
  backgroundColor: string;
}

export const EducationSection = ({
  backgroundColor,
}: EducationSectionProps) => {
  return (
    <PagePosition backgroundColor={backgroundColor} paddingPlus id="education">
      <EducationSectionWrapper>
        <TitleWrapper>
          <Text text="University" color={colors.greenThemeColor} size="32px" />
          <Text text="Education" color={colors.white} size="48px" />
        </TitleWrapper>

        <ContentWrapper>
          <ArrowWrapper>
            <ArrowPosition>
              <Arrow orientation="vertical" showArrowhead={false} />
            </ArrowPosition>
            <Image
              src={Icons.GreenDotWithRing}
              alt=""
              style={{
                zIndex: 800,
              }}
            />
          </ArrowWrapper>

          <StudyTime>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text
                text="Silesian University of Technology in Gliwice (Poland)"
                color={colors.white}
                size="20px"
              />

              <GreenAndWhiteText
                firstText="2016-10 - 2020-02"
                secondText="Bachelor of Engineering"
                textSize="20px"
                styles="margin-top: 0.75rem; margin-bottom: 0.75rem"
              />

              <WhiteAndGreenText
                firstText="Faculty of Mechanical Engineering -"
                secondText="Automation and Robotics"
                textSize="20px"
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "4rem",
              }}
            >
              <Image
                src={Images.EngineeringRobot}
                alt={""}
                width={300}
                height={170}
                style={{
                  borderRadius: "8px",
                }}
              />

              <Text
                text="Engineering degree project"
                color={colors.white}
                size="16px"
                styles="margin-top: 1rem"
              />

              <CallToActionButton
                name="Read More"
                href="/education/engineering-degree-project"
                styles="margin-top: 1rem"
                onClick={() => scrollUserToTopView()}
              />
            </div>
          </StudyTime>
        </ContentWrapper>

        <ContentWrapper>
          <ArrowWrapper>
            <ArrowPosition>
              <Arrow orientation="vertical" />
            </ArrowPosition>
            <Image
              src={Icons.GreenDotWithRing}
              alt=""
              style={{
                zIndex: 800,
              }}
            />
          </ArrowWrapper>

          <StudyTime>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text
                text="Silesian University of Technology in Gliwice (Poland)"
                color={colors.white}
                size="20px"
              />

              <GreenAndWhiteText
                firstText="2020-03 - 2021-11"
                secondText="Master of Engineering"
                textSize="20px"
                styles="margin-top: 0.75rem; margin-bottom: 0.75rem"
              />

              <WhiteAndGreenText
                firstText="Faculty of Mechanical Engineering -"
                secondText="Automation and Robotics"
                textSize="20px"
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "4rem",
              }}
            >
              <Image
                src={Images.Spider}
                alt={""}
                width={300}
                height={170}
                style={{
                  borderRadius: "8px",
                }}
              />

              <Text
                text="Master degree project"
                color={colors.white}
                size="16px"
                styles="margin-top: 1rem"
              />

              <CallToActionButton
                name="Read More"
                href="/education/master-degree-project"
                styles="margin-top: 1rem;"
                onClick={() => scrollUserToTopView()}
              />
            </div>
          </StudyTime>
        </ContentWrapper>
      </EducationSectionWrapper>
    </PagePosition>
  );
};

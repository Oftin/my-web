import { PagePosition } from "@/components/wrappers/pagePosition";
import { CallToActionButton } from "@/components/buttons";
import { WhiteAndGreenText, GreenAndWhiteText, Text } from "@/components/text";
import { colors } from "@/styles/colors";
import { Icons } from "@/components/icons";
import { Images } from "@/components/images";
import { Image } from "@/components/Modifiers";
import { Arrow } from "@/components/arrow";
import {
  EducationSectionWrapper,
  TitleWrapper,
  ArrowWrapper,
  ArrowPosition,
  StudyTime,
  ContentWrapper,
} from "./styled";
import { EducationSectionProps } from "./types";

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
            <div>
              <Image src={Icons.GreenDotWithRing} alt="" />
            </div>
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
              <Image src={Images.EngineeringRobot} alt={"EngineeringRobot"} />

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
              />
            </div>
          </StudyTime>
        </ContentWrapper>

        <ContentWrapper>
          <ArrowWrapper>
            <ArrowPosition>
              <Arrow orientation="vertical" />
            </ArrowPosition>
            <div>
              <Image src={Icons.GreenDotWithRing} alt="GreenDotWithRing" />
            </div>
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
              <Image src={Images.MasterSpider} alt={"MasterSpider"} />

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
              />
            </div>
          </StudyTime>
        </ContentWrapper>
      </EducationSectionWrapper>
    </PagePosition>
  );
};

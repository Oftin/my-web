import { PagePosition } from "@/components/wrappers/pagePosition";
import { CallToActionButton } from "@/components/buttons";
import { colors } from "@/styles/colors";
import { Images } from "@/components/images";
import { Image } from "@/components/Modifiers";
import { MainText, SecondText, TextParagraph } from "@/components/text";
import {
  EducationSectionWrapper,
  TitleWrapper,
  StudyTime,
  StudyStage,
  ImageWithButtonWrapper,
} from "./styled";
import { EducationSectionProps } from "./types";

export const EducationSection = ({
  backgroundColor,
}: EducationSectionProps) => {
  const gapsForTextParagraphs = ["2px", "4px", "6px", "6px"];

  return (
    <PagePosition backgroundColor={backgroundColor} paddingPlus id="education">
      <EducationSectionWrapper>
        <TitleWrapper>
          <SecondText $color={colors.greenThemeColor}>University</SecondText>
          <MainText>Education</MainText>
        </TitleWrapper>

        <StudyTime>
          <StudyStage>
            <TextParagraph $color={colors.white} $displayFlex>
              Silesian University of Technology in Gliwice (Poland)
            </TextParagraph>

            <TextParagraph
              $color={colors.greenThemeColor}
              $lastChildColor={colors.white}
              $gap={gapsForTextParagraphs}
              $displayFlex
            >
              <div>2016-10 - 2020-02</div>
              <div>Bachelor of Engineering</div>
            </TextParagraph>

            <TextParagraph
              $color={colors.white}
              $lastChildColor={colors.greenThemeColor}
              $gap={gapsForTextParagraphs}
              $displayFlex
            >
              <div>Faculty of Mechanical Engineering -</div>
              <div>Automation and Robotics</div>
            </TextParagraph>
          </StudyStage>

          <ImageWithButtonWrapper>
            <Image src={Images.EngineeringRobot} alt="EngineeringRobot" />

            <TextParagraph $color={colors.white}>
              Engineering degree project
            </TextParagraph>

            <CallToActionButton
              name="Read More"
              href="/education/engineering-degree-project#top"
            />
          </ImageWithButtonWrapper>
        </StudyTime>

        <StudyTime>
          <StudyStage>
            <TextParagraph $color={colors.white} $displayFlex>
              Silesian University of Technology in Gliwice (Poland)
            </TextParagraph>

            <TextParagraph
              $color={colors.greenThemeColor}
              $lastChildColor={colors.white}
              $gap={gapsForTextParagraphs}
              $displayFlex
            >
              <div>2020-03 - 2021-11</div>
              <div>Master of Engineering</div>
            </TextParagraph>

            <TextParagraph
              $color={colors.white}
              $lastChildColor={colors.greenThemeColor}
              $gap={gapsForTextParagraphs}
              $displayFlex
            >
              <div>Faculty of Mechanical Engineering -</div>
              <div>Automation and Robotics</div>
            </TextParagraph>
          </StudyStage>

          <ImageWithButtonWrapper>
            <Image src={Images.MasterSpider} alt="MasterSpider" />

            <TextParagraph $color={colors.white}>
              Master degree project
            </TextParagraph>

            <CallToActionButton
              name="Read More"
              href="/education/master-degree-project#top"
            />
          </ImageWithButtonWrapper>
        </StudyTime>
      </EducationSectionWrapper>
    </PagePosition>
  );
};

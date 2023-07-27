import { PagePosition } from "@/components/wrappers/pagePosition";
import { CallToActionButton } from "@/components/buttons";
import { colors } from "@/styles/colors";
import { Images } from "@/components/images";
import { Image } from "@/components/Modifiers";
import {
  EducationSectionWrapper,
  TitleWrapper,
  StudyTime,
  MainText,
  SecondText,
  TextParagraph,
  StudyStage,
  ImageWithButtonWrapper,
} from "./styled";
import { EducationSectionProps } from "./types";

export const EducationSection = ({
  backgroundColor,
}: EducationSectionProps) => {
  return (
    <PagePosition backgroundColor={backgroundColor} paddingPlus id="education">
      <EducationSectionWrapper>
        <TitleWrapper>
          <SecondText>University</SecondText>
          <MainText>Education</MainText>
        </TitleWrapper>

        <StudyTime>
          <StudyStage>
            <TextParagraph>
              Silesian University of Technology in Gliwice (Poland)
            </TextParagraph>

            <TextParagraph
              $firsrColor={colors.greenThemeColor}
              $secondColor={colors.white}
            >
              <div>2016-10 - 2020-02</div>
              <div>Bachelor of Engineering</div>
            </TextParagraph>

            <TextParagraph
              $firsrColor={colors.white}
              $secondColor={colors.greenThemeColor}
            >
              <div>Faculty of Mechanical Engineering -</div>
              <div>Automation and Robotics</div>
            </TextParagraph>
          </StudyStage>

          <ImageWithButtonWrapper>
            <Image src={Images.EngineeringRobot} alt={"EngineeringRobot"} />

            <TextParagraph>Engineering degree project</TextParagraph>

            <CallToActionButton
              name="Read More"
              href="/education/engineering-degree-project#top"
            />
          </ImageWithButtonWrapper>
        </StudyTime>

        <StudyTime>
          <StudyStage>
            <TextParagraph>
              Silesian University of Technology in Gliwice (Poland)
            </TextParagraph>

            <TextParagraph
              $firsrColor={colors.greenThemeColor}
              $secondColor={colors.white}
            >
              <div>2020-03 - 2021-11</div>
              <div>Master of Engineering</div>
            </TextParagraph>

            <TextParagraph
              $firsrColor={colors.white}
              $secondColor={colors.greenThemeColor}
            >
              <div>Faculty of Mechanical Engineering -</div>
              <div>Automation and Robotics</div>
            </TextParagraph>
          </StudyStage>

          <ImageWithButtonWrapper>
            <Image src={Images.MasterSpider} alt={"MasterSpider"} />

            <TextParagraph>Master degree project</TextParagraph>

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

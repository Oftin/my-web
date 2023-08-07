import { PagePosition } from "@/components/wrappers/pagePosition";
import { CallToActionButton } from "@/components/buttons";
import { Images } from "@/components/images";
import { Image } from "@/components/Modifiers";
import { AdditionalActivitiesSectionProps } from "./types";
import { MainText, SecondText, TextParagraph } from "@/components/text";
import {
  AdditionalActivitiesSectionWrapper,
  TitleWrapper,
  ContentWrapper,
  LeftSideWrapper,
  RightSideWrapper,
  ImageWrapper,
} from "./styled";
import { colors } from "@/styles/colors";

export const AdditionalActivitiesSection = ({
  backgroundColor,
}: AdditionalActivitiesSectionProps) => {
  const widthsForTextParagraphs = ["300px", "400px", "500px", "500px"];
  const gapsForTextParagraphs = ["6px", "8px", "10px", "10px"];

  return (
    <PagePosition backgroundColor={backgroundColor} paddingPlus>
      <AdditionalActivitiesSectionWrapper>
        <TitleWrapper>
          <SecondText>
            <div>University</div>
            <div>Time</div>
          </SecondText>
          <MainText>
            <div>Additional</div>
            <div>Activities</div>
          </MainText>
        </TitleWrapper>

        <ContentWrapper>
          <LeftSideWrapper>
            <ImageWrapper>
              <Image src={Images.ERC2019} alt="ERC2019" />
            </ImageWrapper>

            <TextParagraph $color={colors.white}>
              International Mars Rover Competition
            </TextParagraph>
            <TextParagraph $color={colors.white}>ERC 2019</TextParagraph>
          </LeftSideWrapper>

          <RightSideWrapper>
            <TextParagraph
              $color={colors.white}
              $lastChildColor={colors.greenThemeColor}
              $displayFlex
              $justifyContent="center"
              $alignItems="center"
              $width={widthsForTextParagraphs}
              $gap={gapsForTextParagraphs}
            >
              <div>Science club:</div>
              <div>AI-METH Silesian Phoenix</div>
            </TextParagraph>

            <div>
              <TextParagraph
                $color={colors.white}
                $displayFlex
                $justifyContent="center"
                $alignItems="center"
                $width={widthsForTextParagraphs}
              >
                The team built a Mars Rover at the
              </TextParagraph>
              <TextParagraph
                $color={colors.white}
                $displayFlex
                $justifyContent="center"
                $alignItems="center"
                $width={widthsForTextParagraphs}
              >
                Silesian University of Technology in 2019
              </TextParagraph>
            </div>

            <TextParagraph $color={colors.white}>
              My tasks in the team:
            </TextParagraph>

            <div>
              {["3D Modeling", "Programing", "Mechanics"].map((el) => {
                return (
                  <TextParagraph
                    key={el}
                    $color={colors.greenThemeColor}
                    $displayFlex
                    $justifyContent="center"
                    $alignItems="center"
                  >
                    {el}
                  </TextParagraph>
                );
              })}
            </div>

            <CallToActionButton name="Read More" href="/science-club#top" />
          </RightSideWrapper>
        </ContentWrapper>
      </AdditionalActivitiesSectionWrapper>
    </PagePosition>
  );
};

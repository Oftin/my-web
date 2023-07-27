import { PagePosition } from "@/components/wrappers/pagePosition";
import { CallToActionButton } from "@/components/buttons";
import { Images } from "@/components/images";
import { Image } from "@/components/Modifiers";
import { AdditionalActivitiesSectionProps } from "./types";
import {
  AdditionalActivitiesSectionWrapper,
  TitleWrapper,
  ContentWrapper,
  LeftSideWrapper,
  RightSideWrapper,
  MainText,
  SecondText,
  TextParagraph,
  ImageWrapper,
} from "./styled";
import { colors } from "@/styles/colors";

export const AdditionalActivitiesSection = ({
  backgroundColor,
}: AdditionalActivitiesSectionProps) => {
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

            <TextParagraph>International Mars Rover Competition</TextParagraph>
            <TextParagraph>ERC 2019</TextParagraph>
          </LeftSideWrapper>

          <RightSideWrapper>
            <TextParagraph>
              <div>Science club:</div>
              <div>AI-METH Silesian Phoenix</div>
            </TextParagraph>

            <div>
              <TextParagraph>The team built a Mars Rover at the</TextParagraph>
              <TextParagraph>
                Silesian University of Technology in 2019
              </TextParagraph>
            </div>

            <TextParagraph>My tasks in the team:</TextParagraph>

            <div>
              {["3D Modeling", "Programing", "Mechanics"].map((el) => {
                return (
                  <TextParagraph key={el} $color={colors.greenThemeColor}>
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

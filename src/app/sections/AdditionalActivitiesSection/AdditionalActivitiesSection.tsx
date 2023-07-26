import { PagePosition } from "@/components/wrappers/pagePosition";
import { Text, WhiteAndGreenText } from "@/components/text";
import { colors } from "@/styles/colors";
import { CallToActionButton } from "@/components/buttons";
import { Images } from "@/components/images";
import { Image } from "@/components/Modifiers";
import {
  AdditionalActivitiesSectionWrapper,
  TitleWrapper,
  ContentWrapper,
  LeftSideWrapper,
  RightSideWrapper,
} from "./styled";
import { AdditionalActivitiesSectionProps } from "./types";

export const AdditionalActivitiesSection = ({
  backgroundColor,
}: AdditionalActivitiesSectionProps) => {
  return (
    <PagePosition backgroundColor={backgroundColor} paddingPlus>
      <AdditionalActivitiesSectionWrapper>
        <TitleWrapper>
          <WhiteAndGreenText
            firstText="University"
            secondText="Time"
            textSize="32px"
          />
          <WhiteAndGreenText
            firstText="Additional"
            secondText="Activities"
            textSize="48px"
          />
        </TitleWrapper>

        <ContentWrapper>
          <LeftSideWrapper>
            <Image src={Images.ERC2019} alt="ERC2019" />

            <Text
              text="International Mars Rover Competition"
              color={colors.white}
              size="20px"
            />
            <Text text="ERC 2019" color={colors.white} size="20px" />
          </LeftSideWrapper>

          <RightSideWrapper>
            <WhiteAndGreenText
              firstText="Science club:"
              secondText="AI-METH Silesian Phoenix"
              textSize="20px"
              styles="margin-bottom: 3rem"
            />

            <Text
              text="The team built a Mars Rover at the"
              color={colors.white}
              size="20px"
            />
            <Text
              text="Silesian University of Technology in 2019"
              color={colors.white}
              size="20px"
            />

            <Text
              text="My tasks in the team:"
              color={colors.white}
              size="20px"
              styles="margin-top: 3rem; margin-bottom: 1rem;"
            />

            {["3D Modeling", "Programing", "Mechanics"].map((el) => {
              return (
                <Text
                  key={el}
                  text={el}
                  color={colors.greenThemeColor}
                  size="20px"
                />
              );
            })}

            <div style={{ marginTop: "5rem" }}>
              <CallToActionButton name="Read More" href="/science-club" />
            </div>
          </RightSideWrapper>
        </ContentWrapper>
      </AdditionalActivitiesSectionWrapper>
    </PagePosition>
  );
};

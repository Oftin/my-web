import Image from "next/image";
import { PagePosition } from "@/components/wrappers/pagePosition";
import { Text, WhiteAndGreenText } from "@/components/text";
import { Position } from "@/components/wrappers/position";
import { Column } from "@/components/wrappers/column";
import { colors } from "@/styles/colors";
import { CallToActionButton } from "@/components/buttons";
import { Images } from "@/components/images";
import styled from "styled-components";

interface AdditionalActivitiesSectionProps {
  backgroundColor: string;
}

const AdditionalActivitiesSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 6em;
  padding-bottom: 6em;
`;

const TitleWrapper = styled.div`
  @media only screen and (min-width: 1300px) {
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  @media only screen and (max-width: 1300px) {
    grid-template-columns: 1fr;
  }
`;

const LeftSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RightSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1300px) {
    margin-top: 7.5rem;
  }
`;

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
            <Image
              src={Images.ERC2019}
              alt=""
              width={590}
              height={345}
              style={{
                marginTop: "5rem",
                marginBottom: "1.5rem",
                borderRadius: "8px",
              }}
            />

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

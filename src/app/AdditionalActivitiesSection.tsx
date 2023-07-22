import Image from "next/image";
import { PagePosition } from "@/components/wrappers/pagePosition";
import { Text, WhiteAndGreenText } from "@/components/text";
import { Position } from "@/components/wrappers/position";
import { Column } from "@/components/wrappers/column";
import { colors } from "@/styles/colors";
import { CallToActionButton } from "@/components/buttons";
import { scrollUserToTopView } from "@/helpers";
import { Images } from "@/components/images";

interface AdditionalActivitiesSectionProps {
  backgroundColor: string;
}

export const AdditionalActivitiesSection = ({
  backgroundColor,
}: AdditionalActivitiesSectionProps) => {
  return (
    <PagePosition backgroundColor={backgroundColor} paddingPlus>
      <Position alignItems="start">
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

        <Position>
          <Column columns={2} gap={10}>
            <Position>
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
            </Position>

            <Position styles="padding-top: 5rem; margin-top: 2.5rem;">
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
                styles="margin-bottom: 1rem;"
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
                <CallToActionButton
                  name="Read More"
                  href="/science-club"
                  onClick={() => scrollUserToTopView()}
                />
              </div>
            </Position>
          </Column>
        </Position>
      </Position>
    </PagePosition>
  );
};

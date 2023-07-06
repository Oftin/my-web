import Image from "next/image";
import { Text, WhiteAndGreenText } from "@/components/text";
import { FlexColumn, Column } from "@/components/wrappers/columns";
import { colors } from "@/styles/colors";
import { CallToActionButton } from "@/components/buttons";

interface AdditionalActivitiesSectionProps {
  backgroundColor: string;
}

export const AdditionalActivitiesSection = ({
  backgroundColor,
}: AdditionalActivitiesSectionProps) => {
  return (
    <FlexColumn
      items="start"
      justify="center"
      layoutMargin
      styles={`width: 100%; height:100vh; padding-top: 5em; padding-bottom: 5em; background-color: ${backgroundColor}`}
    >
      <WhiteAndGreenText
        firstText={"University"}
        secondText={"Time"}
        textSize={"32px"}
      />
      <WhiteAndGreenText
        firstText={"Additional"}
        secondText={"Activities"}
        textSize={"48px"}
      />

      <FlexColumn
        items="center"
        justify="center"
        styles="width: 100%; height:100%"
      >
        <Column numberOfColumns={2} gap={10}>
          <FlexColumn items="center" justify="center">
            <div
              style={{
                backgroundColor: "rgb(252 165 165)",
                marginTop: "5rem",
                marginBottom: "1.5rem",
                borderRadius: "0.5rem",
                width: 590,
                height: 345,
              }}
            >
              <Image width={590} height={345} src={""} alt={"Image"} />
            </div>

            <Text
              text={"International Mars Rover Competition"}
              color={colors.white}
              size={"20px"}
            />
            <Text text={"ERC 2019"} color={colors.white} size={"20px"} />
          </FlexColumn>

          <FlexColumn
            items="center"
            justify="center"
            styles="padding-top: 5rem; margin-top: 2.5rem;"
          >
            <WhiteAndGreenText
              firstText="Science club:"
              secondText="AI-METH Silesian Phoenix"
              textSize="20px"
              styles="margin-bottom: 3rem"
            />

            <Text
              text={"The team built a Mars Rover at the"}
              color={colors.white}
              size={"20px"}
            />
            <Text
              text={"Silesian University of Technology in 2019"}
              color={colors.white}
              size={"20px"}
            />
            <Text
              text={"My tasks in the team:"}
              color={colors.white}
              size={"20px"}
              styles={"margin-bottom: 1rem;"}
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
          </FlexColumn>
        </Column>
      </FlexColumn>
    </FlexColumn>
  );
};

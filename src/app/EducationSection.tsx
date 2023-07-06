import Image from "next/image";
import { CallToActionButton } from "@/components/buttons";
import { WhiteAndGreenText, GreenAndWhiteText, Text } from "@/components/text";
import { FlexColumn } from "@/components/wrappers/columns";
import { colors } from "@/styles/colors";
import { Icons } from "@/components/icons";

interface EducationSectionProps {
  backgroundColor: string;
}

export const EducationSection = ({
  backgroundColor,
}: EducationSectionProps) => {
  return (
    <FlexColumn
      items={"start"}
      justify={"center"}
      styles={`width: 100%; height: 100%; padding-top: 5em; padding-bottom: 5em; background-color: ${backgroundColor}`}
      layoutMargin
    >
      <Text text="University" color={colors.greenThemeColor} size="32px" />
      <Text text="Education" color={colors.white} size="48px" />

      <FlexColumn
        items={"center"}
        justify={"center"}
        styles={`width: 100%; height: 100vh; background-color: ${backgroundColor}`}
        minusLayoutMargin
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "10% 1fr 30%",
            width: "100%",
          }}
        >
          <div style={{ margin: "auto", marginRight: 0 }}>
            <Image src={Icons.GreenDotWithRing} alt="" />
          </div>

          <div style={{ margin: "auto" }}>
            <Text
              text={"Silesian University of Technology in Gliwice (Poland)"}
              color={colors.white}
              size={"20px"}
            />

            <GreenAndWhiteText
              firstText={"2016-10 - 2020-02"}
              secondText={"Bachelor of Engineering"}
              textSize={"20px"}
              styles="margin-top: 0.75rem; margin-bottom: 0.75rem"
            />

            <WhiteAndGreenText
              firstText={"Faculty of Mechanical Engineering -"}
              secondText={"Automation and Robotics"}
              textSize={"20px"}
            />
          </div>

          <FlexColumn
            items={"center"}
            justify={"center"}
            styles="margin-top: 7rem"
          >
            <div
              style={{
                width: "300px",
                height: "170px",
                backgroundColor: "pink",
              }}
            ></div>

            <Text
              text={"Engineering degree project"}
              color={colors.white}
              size={"16px"}
              styles="margin-top: 1rem"
            />

            <CallToActionButton
              name={"Read More"}
              href={""}
              styles="margin-top: 1rem"
            />
          </FlexColumn>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "10% 1fr 30%",
            width: "100%",
          }}
        >
          <div style={{ margin: "auto", marginRight: 0 }}>
            <Image src={Icons.GreenDotWithRing} alt="" />
          </div>

          <div style={{ margin: "auto" }}>
            <Text
              text={"Silesian University of Technology in Gliwice (Poland)"}
              color={colors.white}
              size={"20px"}
            />

            <GreenAndWhiteText
              firstText={"2020-03 - 2021-11"}
              secondText={"Master of Engineering"}
              textSize={"20px"}
              styles="margin-top: 0.75rem; margin-bottom: 0.75rem"
            />

            <WhiteAndGreenText
              firstText={"Faculty of Mechanical Engineering -"}
              secondText={"Automation and Robotics"}
              textSize={"20px"}
            />
          </div>

          <FlexColumn
            items={"center"}
            justify={"center"}
            styles="margin-top: 7rem"
          >
            <div
              style={{
                width: "300px",
                height: "170px",
                backgroundColor: "pink",
              }}
            ></div>

            <Text
              text={"Engineering degree project"}
              color={colors.white}
              size={"16px"}
              styles="margin-top: 1rem"
            />

            <CallToActionButton
              name={"Read More"}
              href={""}
              styles="margin-top: 1rem"
            />
          </FlexColumn>
        </div>
      </FlexColumn>
    </FlexColumn>
  );
};

import Image from "next/image";
import { CallToActionButton } from "@/components/buttons";
import { WhiteAndGreenText, GreenAndWhiteText, Text } from "@/components/text";
import { FlexColumn } from "@/components/wrappers/columns";
import { colors } from "@/styles/colors";
import { Icons } from "@/components/icons";
import { scrollUserToTopView } from "@/helpers";
import { Images } from "@/components/images";
import { Arrow } from "@/components/arrow";

interface EducationSectionProps {
  backgroundColor: string;
}

export const EducationSection = ({
  backgroundColor,
}: EducationSectionProps) => {
  return (
    <FlexColumn
      items="start"
      justify="center"
      styles={`width: 100%; height: 100%; padding-top: 5em; padding-bottom: 5em; background-color: ${backgroundColor}`}
      extraSpaceFromEdgeOfScreen={true}
      id="education"
    >
      <Text text="University" color={colors.greenThemeColor} size="32px" />
      <Text text="Education" color={colors.white} size="48px" />

      <FlexColumn
        items="center"
        justify="center"
        styles={`width: 100%; height: 100%; background-color: ${backgroundColor}; margin-top: 2rem;`}
        minusExtraSpaceFromEdgeOfScreen
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "10% 1fr 30%",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "50%",
                marginTop: "20vh",
              }}
            >
              <Arrow orientation="vertical" showArrowhead={false} />
            </div>
            <Image
              src={Icons.GreenDotWithRing}
              alt=""
              style={{
                zIndex: 800,
              }}
            />
          </div>

          <div style={{ margin: "auto" }}>
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

          <FlexColumn items="center" justify="center" styles="margin-top: 7rem">
            <Image
              src={Images.EngineeringRobot}
              alt={""}
              width={300}
              height={170}
              style={{
                borderRadius: "8px",
              }}
            />

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
              onClick={() => scrollUserToTopView()}
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "50%",
                marginBottom: "20vh",
              }}
            >
              <Arrow orientation="vertical" />
            </div>
            <Image
              src={Icons.GreenDotWithRing}
              alt=""
              style={{
                zIndex: 800,
              }}
            />
          </div>

          <div style={{ margin: "auto" }}>
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

          <FlexColumn items="center" justify="center" styles="margin-top: 7rem">
            <Image
              src={Images.Spider}
              alt={""}
              width={300}
              height={170}
              style={{
                borderRadius: "8px",
              }}
            />

            <Text
              text="Engineering degree project"
              color={colors.white}
              size="16px"
              styles="margin-top: 1rem"
            />

            <CallToActionButton
              name="Read More"
              href="/education/master-degree-project"
              styles="margin-top: 1rem"
              onClick={() => scrollUserToTopView()}
            />
          </FlexColumn>
        </div>
      </FlexColumn>
    </FlexColumn>
  );
};

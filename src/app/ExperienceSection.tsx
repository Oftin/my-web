import Image from "next/image";
import { Text } from "@/components/text";
import { FlexColumn } from "@/components/wrappers/columns";
import { colors } from "@/styles/colors";
import { Icons } from "@/components/icons";
import { DisplayGrid } from "@/components/wrappers/displays";
import { CallToActionButton } from "@/components/buttons";

interface ExperienceSectionProps {
  backgroundColor: string;
}

export const ExperienceSection = ({
  backgroundColor,
}: ExperienceSectionProps) => {
  return (
    <FlexColumn
      items="start"
      justify="center"
      styles={`width: 100%; height: 100vh; padding-top: 5em; background-color: ${backgroundColor}`}
      extraSpaceFromEdgeOfScreen={true}
    >
      <Text text="Last" color={colors.greenThemeColor} size="32px" />
      <Text text="Experience" color={colors.white} size="48px" />

      <FlexColumn
        items="center"
        justify="center"
        styles="width: 100%; margin-top: 5rem; margin-bottom: 5rem;"
      >
        <DisplayGrid
          numberOfColumn={4}
          styles="gap: 1.25rem; width: 100%; height: 100%; align-items: center; justify-content: center; margin-bottom: 2.5rem;"
        >
          <div
            style={{
              position: "absolute",
              justifyItems: "center",
              width: "100%",
              marginLeft: "-8rem",
              marginRight: "-3.5rem",
            }}
          >
            <FlexColumn items="center" justify="center">
              <Image src={Icons.ArrowLongHorizontal} alt="" />
            </FlexColumn>
          </div>

          <DisplayGrid numberOfRows={5}>
            <div></div>
            <Text
              text="2017-10 - 2019-08"
              color={colors.greenThemeColor}
              size="20px"
            />
            <Image src={Icons.GreenDotWithRing} alt="" />
            <Image src={Icons.ArrowDown} alt="" />
            <FlexColumn items="center" justify="center">
              <Text
                text="Technical Support Engineer"
                color={colors.white}
                size="20px"
              />
              <Text text="UPC Polska" color={colors.white} size="20px" />
            </FlexColumn>
          </DisplayGrid>

          <DisplayGrid numberOfRows={5}>
            <FlexColumn items="center" justify="center">
              <Text text="Robotic Engineer" color={colors.white} size="20px" />
              <Text
                text="RW Swiss Automation"
                color={colors.white}
                size="20px"
              />
            </FlexColumn>
            <Image src={Icons.ArrowUp} alt="" />
            <Image src={Icons.GreenDotWithRing} alt="" />
            <Text
              text="2019-09 - 2020-05"
              color={colors.greenThemeColor}
              size="20px"
            />
            <div></div>
          </DisplayGrid>

          <DisplayGrid numberOfRows={5}>
            <div></div>
            <Text
              text="2021-05 - 2021-06"
              color={colors.greenThemeColor}
              size="20px"
            />
            <Image src={Icons.GreenDotWithRing} alt="" />
            <Image src={Icons.ArrowDown} alt="" />
            <FlexColumn items="center" justify="center">
              <Text text="Technical support" color={colors.white} size="20px" />
              <Text text="SR Robotics" color={colors.white} size="20px" />
            </FlexColumn>
          </DisplayGrid>

          <DisplayGrid numberOfRows={5}>
            <FlexColumn items="center" justify="center">
              <Text
                text="Junior React Developer"
                color={colors.white}
                size="20px"
              />
              <Text text="LEOCODE" color={colors.white} size="20px" />
            </FlexColumn>
            <Image src={Icons.ArrowUp} alt="" />
            <Image src={Icons.GreenDotWithRing} alt="" />
            <Text
              text="2021-10 - 2023-07"
              color={colors.greenThemeColor}
              size="20px"
            />
            <div></div>
          </DisplayGrid>
        </DisplayGrid>

        <FlexColumn items="center" justify="center">
          <CallToActionButton name="Read More" href="/experience" />
        </FlexColumn>
      </FlexColumn>
    </FlexColumn>
  );
};

import Image from "next/image";
import { PagePosition } from "@/components/wrappers/pagePosition";
import { Text } from "@/components/text";
import { Position } from "@/components/wrappers/position";
import { colors } from "@/styles/colors";
import { Icons } from "@/components/icons";
import { DisplayGrid } from "@/components/wrappers/displays";
import { CallToActionButton } from "@/components/buttons";
import { scrollUserToTopView } from "@/helpers";
import { Arrow } from "@/components/arrow";

interface ExperienceSectionProps {
  backgroundColor: string;
}

export const ExperienceSection = ({
  backgroundColor,
}: ExperienceSectionProps) => {
  return (
    <PagePosition backgroundColor={backgroundColor} paddingPlus id="experience">
      <Position
        alignItems="start"
        styles={`width: 100%; height: 100vh; padding-top: 5em;`}
      >
        <Text text="Last" color={colors.greenThemeColor} size="32px" />
        <Text text="Experience" color={colors.white} size="48px" />

        <Position styles="width: 100%; margin-top: 5rem; margin-bottom: 5rem;">
          <DisplayGrid
            numberOfColumn={4}
            styles="gap: 1.25rem; width: 100%; height: 100%; align-items: center; justify-content: center; margin-bottom: 2.5rem;"
          >
            <div
              style={{
                position: "absolute",
                justifyItems: "center",
                width: "100%",
                marginLeft: "-4rem",
                marginRight: "-3.5rem",
              }}
            >
              <Arrow orientation="horizontal" />
            </div>

            <DisplayGrid numberOfRows={5}>
              <div></div>
              <Text
                text="2017-10 - 2019-08"
                color={colors.greenThemeColor}
                size="20px"
              />
              <Image
                src={Icons.GreenDotWithRing}
                alt=""
                style={{
                  zIndex: 800,
                }}
              />
              <Image src={Icons.ArrowDown} alt="" />
              <Position>
                <Text
                  text="Technical Support Engineer"
                  color={colors.white}
                  size="20px"
                />
                <Text text="UPC Polska" color={colors.white} size="20px" />
              </Position>
            </DisplayGrid>

            <DisplayGrid numberOfRows={5}>
              <Position>
                <Text
                  text="Robotic Engineer"
                  color={colors.white}
                  size="20px"
                />
                <Text
                  text="RW Swiss Automation"
                  color={colors.white}
                  size="20px"
                />
              </Position>
              <Image src={Icons.ArrowUp} alt="" />
              <Image
                src={Icons.GreenDotWithRing}
                alt=""
                style={{
                  zIndex: 800,
                }}
              />
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
              <Image
                src={Icons.GreenDotWithRing}
                alt=""
                style={{
                  zIndex: 800,
                }}
              />
              <Image src={Icons.ArrowDown} alt="" />
              <Position>
                <Text
                  text="Technical support"
                  color={colors.white}
                  size="20px"
                />
                <Text text="SR Robotics" color={colors.white} size="20px" />
              </Position>
            </DisplayGrid>

            <DisplayGrid numberOfRows={5}>
              <Position>
                <Text
                  text="Junior React Developer"
                  color={colors.white}
                  size="20px"
                />
                <Text text="LEOCODE" color={colors.white} size="20px" />
              </Position>
              <Image src={Icons.ArrowUp} alt="" />
              <Image
                src={Icons.GreenDotWithRing}
                alt=""
                style={{
                  zIndex: 800,
                }}
              />
              <Text
                text="2021-10 - 2023-07"
                color={colors.greenThemeColor}
                size="20px"
              />
              <div></div>
            </DisplayGrid>
          </DisplayGrid>

          <Position>
            <CallToActionButton
              name="Read More"
              href="/experience"
              onClick={() => scrollUserToTopView()}
            />
          </Position>
        </Position>
      </Position>
    </PagePosition>
  );
};

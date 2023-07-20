"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PagePosition } from "@/components/wrappers/pagePosition";
import { ElementWithDropDownDescription } from "@/components/elementWithDropDownDescription";
import { Text } from "@/components/text";
import { Position } from "@/components/wrappers/position";
import { Column } from "@/components/wrappers/column";
import { colors } from "@/styles/colors";
import { skillTitleArray, skillsArray } from "./mockUp";

const importSkillsTitleArray = skillTitleArray;
const importSkillsArray = skillsArray;

export default function Skills() {
  return (
    <>
      <Navbar />
      <PagePosition backgroundColor={colors.background.ebonyClay}>
        <Position>
          <Text
            text={"Skills"}
            color={colors.greenThemeColor}
            size={"48px"}
            styles="margin-top: 10rem;"
          />

          {importSkillsTitleArray.map((el) => {
            const backgroundColorForSection =
              el.id % 2
                ? `${colors.background.ebonyClay}`
                : `${colors.background.mirage}`;

            const backgroundColorForTile =
              el.id % 2
                ? `${colors.background.mirage}`
                : `${colors.background.ebonyClay}`;

            return (
              <div
                key={el.title}
                style={{
                  width: "100%",
                  backgroundColor: backgroundColorForSection,
                }}
              >
                <Position styles="width: 100%; margin-top: 6rem; margin-bottom: 10rem;">
                  <Text
                    text={el.title}
                    color={colors.white}
                    size={"32px"}
                    styles="margin-bottom: 2rem"
                  />
                  <Column columns={3} gap={20}>
                    {importSkillsArray
                      .filter((skill) => skill.parentId === el.id)
                      .map((el) => {
                        return (
                          <div key={el.skill}>
                            <ElementWithDropDownDescription
                              key={el.skill}
                              text={el.skill}
                              dropDownText={el.description}
                              backgroundColor={backgroundColorForTile}
                            />
                          </div>
                        );
                      })}
                  </Column>
                </Position>
              </div>
            );
          })}
        </Position>

        <Position styles="margin-top: 6rem; margin-bottom: 12rem">
          <Text
            text={"More skills incoming!"}
            color={colors.white}
            size={"48px"}
          />
        </Position>
      </PagePosition>
      <Footer />
    </>
  );
}

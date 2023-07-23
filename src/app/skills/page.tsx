"use client";

import { PagePosition } from "@/components/wrappers/pagePosition";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ElementWithDropDownDescription } from "@/components/elementWithDropDownDescription";
import { Text } from "@/components/text";
import { colors } from "@/styles/colors";
import { skillTitleArray, skillsArray } from "./mockUp";
import { SkillsWrapper, ColumnSkills } from "./styled";

const importSkillsTitleArray = skillTitleArray;
const importSkillsArray = skillsArray;

export default function Skills() {
  return (
    <>
      <Navbar />
      <PagePosition backgroundColor={colors.background.ebonyClay}>
        <SkillsWrapper>
          <Text
            text={"Skills"}
            color={colors.greenThemeColor}
            size={"48px"}
            styles="margin-top: 8rem;"
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
                  width: "100vw",
                  backgroundColor: backgroundColorForSection,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <Text
                    text={el.title}
                    color={colors.white}
                    size={"32px"}
                    styles="margin-top: 4rem; margin-bottom: 2rem;"
                  />
                </div>
                <div
                  style={{
                    width: "80%",
                    marginBottom: "6rem",
                  }}
                >
                  <ColumnSkills>
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
                  </ColumnSkills>
                </div>
              </div>
            );
          })}

          <Text
            text={"More skills incoming!"}
            color={colors.white}
            size={"48px"}
            styles="margin-top: 6rem; margin-bottom: 6rem;"
          />
        </SkillsWrapper>
      </PagePosition>
      <Footer />
    </>
  );
}

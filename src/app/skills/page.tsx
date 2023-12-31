"use client";

import { PagePosition } from "@/components/wrappers/pagePosition";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ElementWithDropDownDescription } from "@/components/elementWithDropDownDescription";
import { colors } from "@/styles/colors";
import { skillTitleArray, skillsArray } from "./mockUp";
import { MainText, SecondText } from "@/components/text";
import {
  SkillsWrapper,
  ColumnSkills,
  SectionWrapper,
  ContentWrapper,
} from "./styled";

const importSkillsTitleArray = skillTitleArray;
const importSkillsArray = skillsArray;

export default function Skills() {
  return (
    <>
      <Navbar />
      <PagePosition backgroundColor={colors.background.ebonyClay}>
        <SkillsWrapper>
          <MainText $marginTop="8rem">Skills</MainText>

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
              <SectionWrapper
                key={el.title}
                $backgroundColor={backgroundColorForSection}
              >
                <SecondText $marginTop="4rem" $marginBottom="2rem">
                  {el.title}
                </SecondText>

                <ContentWrapper>
                  <ColumnSkills>
                    {importSkillsArray
                      .filter((skill) => skill.parentId === el.id)
                      .map((el) => {
                        return (
                          <ElementWithDropDownDescription
                            key={el.skill}
                            text={el.skill}
                            dropDownText={el.description}
                            backgroundColor={backgroundColorForTile}
                          />
                        );
                      })}
                  </ColumnSkills>
                </ContentWrapper>
              </SectionWrapper>
            );
          })}

          <MainText $marginTop="6rem" $marginBottom="6rem">
            More skills incoming!
          </MainText>
        </SkillsWrapper>
      </PagePosition>
      <Footer />
    </>
  );
}

"use client";

import { PagePosition } from "@/components/wrappers/pagePosition";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { colors } from "@/styles/colors";
import { Icons } from "@/components/icons";
import { Image } from "@/components/Modifiers";
import { experienceArray } from "./mockUp";
import {
  ExperienceWrapper,
  ContentWrapper,
  Ul,
  Li,
  MainText,
  SecondText,
  IconWrapper,
} from "./styled";

const importExperienceArray = experienceArray;

const imageArray = [
  {
    image: Icons.Support,
    paretnId: 1,
  },
  {
    image: Icons.IndustryRobot,
    paretnId: 2,
  },
  {
    image: Icons.UnderwaterScooter,
    paretnId: 3,
  },
  {
    image: Icons.Programming,
    paretnId: 4,
  },
];

export default function Experience() {
  return (
    <>
      <Navbar />
      <PagePosition backgroundColor={colors.background.mirage}>
        <ExperienceWrapper>
          <MainText>Experience</MainText>

          {importExperienceArray.map((exp) => {
            return (
              <ContentWrapper key={exp.company}>
                <div>
                  <SecondText>{exp.company}</SecondText>
                  <SecondText>
                    <div>{exp.date}</div>
                    <div>{exp.role}</div>
                  </SecondText>

                  <Ul>
                    {exp.listDuties.map((el) => {
                      return <Li key={el}>{el}s</Li>;
                    })}
                  </Ul>
                </div>

                {imageArray.map((el) => {
                  const showImage = el.paretnId === exp.id;
                  return (
                    <>
                      {showImage && (
                        <IconWrapper>
                          <Image
                            key={el.paretnId}
                            src={el.image}
                            alt={"svgIcon"}
                          />
                        </IconWrapper>
                      )}
                    </>
                  );
                })}
              </ContentWrapper>
            );
          })}
        </ExperienceWrapper>
      </PagePosition>
      <Footer backgroundColor={colors.background.ebonyClay} />
    </>
  );
}

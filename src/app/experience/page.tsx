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
  TextWrapper,
  Ul,
  Li,
  MainText,
  SecondText,
  IconWrapper,
} from "./styled";

const importExperienceArray = experienceArray;

const imageArray = [
  {
    image: Icons.Programming,
    paretnId: 1,
  },
  {
    image: Icons.UnderwaterScooter,
    paretnId: 2,
  },
  {
    image: Icons.IndustryRobot,
    paretnId: 3,
  },
  {
    image: Icons.Support,
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
                <TextWrapper>
                  <SecondText>{exp.company}</SecondText>
                  <SecondText>
                    <div>{exp.date}</div>
                    <div>{exp.role}</div>
                  </SecondText>

                  <Ul>
                    {exp.listDuties.map((el) => {
                      return <Li key={el}>{el}</Li>;
                    })}
                  </Ul>
                </TextWrapper>

                {imageArray.map((el) => {
                  const showImage = el.paretnId === exp.id;
                  return (
                    <>
                      {showImage && (
                        <IconWrapper>
                          <Image
                            key={el.paretnId}
                            src={el.image}
                            alt="svgIcon"
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
      <Footer />
    </>
  );
}

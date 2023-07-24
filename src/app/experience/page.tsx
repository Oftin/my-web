"use client";

import Image from "next/image";
import { PagePosition } from "@/components/wrappers/pagePosition";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { GreenAndWhiteText, Text } from "@/components/text";
import { colors } from "@/styles/colors";
import { Icons } from "@/components/icons";
import { Arrow } from "@/components/arrow";
import { experienceArray } from "./mockUp";
import {
  ExperienceWrapper,
  ContentWrapper,
  ArrowWrapper,
  ArrowPosition,
  ImagesWrapper,
  Ul,
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
          <Text
            text={"Experience"}
            color={colors.white}
            size={"48px"}
            styles="margin-bottom: 4rem;"
          />
          {importExperienceArray.map((exp) => {
            const lastElement = importExperienceArray.findLast((last) => {
              return last;
            });

            const showArrowhead = exp.company === lastElement?.company;

            return (
              <ContentWrapper key={exp.company}>
                <ArrowWrapper>
                  <ArrowPosition>
                    <Arrow
                      orientation="vertical"
                      showArrowhead={showArrowhead}
                    />
                  </ArrowPosition>
                  <Image
                    src={Icons.GreenDotWithRing}
                    alt=""
                    style={{
                      zIndex: 800,
                    }}
                  />
                </ArrowWrapper>

                <div style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
                  <Text text={exp.company} color={colors.white} size={"20px"} />

                  <div
                    style={{
                      display: "inline-flex",
                    }}
                  >
                    <GreenAndWhiteText
                      firstText={exp.date}
                      secondText={exp.role}
                      textSize={"20px"}
                      styles="margin: 1rem 0rem;"
                    />
                  </div>
                  <Ul>
                    {exp.listDuties.map((el) => {
                      return (
                        <li
                          key={el}
                          style={{
                            paddingBottom: "0.25em",
                          }}
                        >
                          {el}
                        </li>
                      );
                    })}
                  </Ul>
                </div>

                <ImagesWrapper>
                  {imageArray.map((el) => {
                    const showImage = el.paretnId === exp.id;
                    return (
                      <>
                        {showImage && (
                          <Image
                            key={el.paretnId}
                            src={el.image}
                            alt={""}
                            style={{
                              width: "100%",
                              height: "100%",
                              marginTop: "3rem",
                              maxWidth: "150px",
                            }}
                          />
                        )}
                      </>
                    );
                  })}
                </ImagesWrapper>
              </ContentWrapper>
            );
          })}
        </ExperienceWrapper>
      </PagePosition>
      <Footer backgroundColor={colors.background.ebonyClay} />
    </>
  );
}

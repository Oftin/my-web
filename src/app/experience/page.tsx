"use client";

import Image from "next/image";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PagePosition } from "@/components/wrappers/pagePosition";
import { GreenAndWhiteText, Text } from "@/components/text";
import { Position } from "@/components/wrappers/position";
import { colors } from "@/styles/colors";
import { Icons } from "@/components/icons";
import { ExperienceWraper } from "./styled";
import { experienceArray } from "./mockUp";
import { Arrow } from "@/components/arrow";

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
        <Position styles={"margin-bottom: 6rem;"}>
          <Text
            text={"Experience"}
            color={colors.white}
            size={"48px"}
            styles="margin-top: 10rem; margin-bottom: 4rem;"
          />
          {importExperienceArray.map((exp) => {
            const lastElement = importExperienceArray.findLast((last) => {
              return last;
            });

            const showArrowhead = exp.company === lastElement?.company;

            return (
              <ExperienceWraper key={exp.company}>
                <Arrow orientation="vertical" showArrowhead={showArrowhead} />

                <div style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
                  <Text text={exp.company} color={colors.white} size={"20px"} />

                  <div
                    style={{
                      display: "inline-flex",
                      marginLeft: "-3.95rem",
                    }}
                  >
                    <Image
                      src={Icons.GreenDotWithRing}
                      alt={""}
                      style={{
                        margin: "auto",
                        width: "25px",
                        marginRight: "2.35rem",
                        zIndex: 899,
                      }}
                    />
                    <GreenAndWhiteText
                      firstText={exp.date}
                      secondText={exp.role}
                      textSize={"20px"}
                      styles="margin: 1rem 0rem;"
                    />
                  </div>
                  <ul>
                    {exp.listDuties.map((el) => {
                      return (
                        <li
                          key={el}
                          style={{
                            color: `${colors.white}`,
                            marginLeft: "1rem",
                          }}
                        >
                          {el}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {imageArray.map((el) => {
                  const showImage = el.paretnId === exp.id;
                  return (
                    <>
                      {showImage && (
                        <Image
                          key={el.paretnId}
                          src={el.image}
                          alt={""}
                          width={150}
                          style={{
                            marginTop: "3rem",
                          }}
                        />
                      )}
                    </>
                  );
                })}
              </ExperienceWraper>
            );
          })}
        </Position>
      </PagePosition>

      <Footer />
    </>
  );
}

"use client";

import Image from "next/image";
import { PagePosition } from "@/components/wrappers/pagePosition";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { GreenAndWhiteText, Text } from "@/components/text";
import { Position } from "@/components/wrappers/position";
import { colors } from "@/styles/colors";
import { Icons } from "@/components/icons";
import { ExperienceWraper } from "./styled";
import { experienceArray } from "./mockUp";
import { Arrow } from "@/components/arrow";
import styled from "styled-components";

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin-top: 10rem;
  margin-bottom: 6rem;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr 2fr;
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr 3fr;
  }
`;

const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ArrowPosition = styled.div`
  position: absolute;
  height: 40%;
  margin-top: 4rem;

  @media only screen and (max-width: 1300px) {
    height: 40%;
  }
`;

const ImagesWrapper = styled.div`
  @media only screen and (max-width: 992px) {
    visibility: hidden;
    display: none;
  }
`;

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

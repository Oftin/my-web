"use client";

import Image from "next/image";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { GreenAndWhiteText, Text } from "@/components/text";
import { FlexColumn } from "@/components/wrappers/columns";
import { colors } from "@/styles/colors";
import { Icons } from "@/components/icons";
import { ExperienceWraper } from "./styled";
import { experienceArray } from "./mockUp";

const importExperienceArray = experienceArray;

export default function Experience() {
  return (
    <>
      <Navbar />
      <FlexColumn
        items={"center"}
        justify={"center"}
        styles={`background-color: ${colors.background.mirage}`}
      >
        <Text
          text={"Experience"}
          color={colors.white}
          size={"48px"}
          styles="margin-top: 10rem;"
        />
        {importExperienceArray.map((exp) => {
          return (
            <ExperienceWraper key={exp.company}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: `${colors.white}`,
                  width: "2px",
                  height: "100%",
                  margin: "auto",
                }}
              />

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

              <div
                style={{
                  width: "170px",
                  height: "170px",
                  backgroundColor: "pink",
                  margin: "auto",
                  marginTop: "5.75rem",
                }}
              />
            </ExperienceWraper>
          );
        })}
      </FlexColumn>
      <Footer />
    </>
  );
}

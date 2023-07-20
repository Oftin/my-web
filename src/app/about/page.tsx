"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Position } from "@/components/wrappers/position";
import { Column } from "@/components/wrappers/column";
import { TextParagraph, WhiteAndGreenText, Text } from "@/components/text";
import { Footer } from "@/components/footer";
import { colors } from "@/styles/colors";
import { Images } from "@/components/images";
import { Icons } from "@/components/icons";
import { PagePosition } from "@/components/wrappers/pagePosition";

const leftInterestsColumn = [
  {
    id: 1,
    interest: "Modern technology",
    icon: Icons.ModernTechnology,
  },
  {
    id: 2,
    interest: "Artificial intelligence",
    icon: Icons.AI,
  },
  {
    id: 3,
    interest: "Programming languages",
    icon: Icons.Programming,
  },
  {
    id: 4,
    interest: "Electronics",
    icon: Icons.Electronics,
  },
  {
    id: 5,
    interest: "Business analytics",
    icon: Icons.BusinessAnalytics,
  },
];

const rightInterestsColumn = [
  {
    id: 1,
    interest: "Psychology",
    icon: Icons.Psychology,
  },
  {
    id: 2,
    interest: "Reading books",
    icon: Icons.ReadingBooks,
  },
  {
    id: 3,
    interest: "Physical activity",
    icon: Icons.PhysicalActivity,
  },
  {
    id: 4,
    interest: "Travels",
    icon: Icons.Travels,
  },
  {
    id: 5,
    interest: "Dancing",
    icon: Icons.Dancing,
  },
];

export default function About() {
  return (
    <>
      <Navbar />
      <PagePosition>
        <Position>
          <Column columns={2} styles="height: 100vh; margin-top: 4rem;">
            <Image
              src={Images.ERC2019MyPhoto}
              alt=""
              width={550}
              style={{ margin: "auto", borderRadius: "8px" }}
            />
            <div
              style={{
                width: "45vw",
                margin: "auto",
              }}
            >
              <WhiteAndGreenText
                firstText="About"
                secondText="Me"
                textSize="48px"
                styles="margin-bottom: 1rem;"
              />
              <TextParagraph
                text={
                  "The main word that describes me is an optimist. Because of that, I decided to rebrand myself as a programmer. With great passion for modern technology, especially artificial intelligence, I constantly try to improve my growing asset of skills. I have a master's degree in Automation and Robotics. Instead of problems, I see challenges and that is the mindset I am trying ro apply to my personal life and career path."
                }
                size="24px"
                styles="margin-bottom: 1rem;"
              />

              <TextParagraph
                text={
                  "I love new challenges, implementing my own ideas and helping people."
                }
                size="24px"
              />
            </div>
          </Column>
        </Position>
        <Position styles="height: 100vh">
          <Text
            text={"Interests"}
            color={colors.white}
            size={"48px"}
            styles="margin-bottom: 2rem;"
          />
          <Column columns={2} gap={50} styles="margin-top: 2rem;">
            <div
              style={{
                borderRadius: "12px",
                boxShadow: "0px 0px 10px 2px rgba(16, 163, 138, 1)",
                padding: "24px",
              }}
            >
              {leftInterestsColumn.map((el) => {
                return (
                  <div
                    key={el.interest}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      margin: "1rem",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={el.icon}
                      alt={""}
                      height={30}
                      style={{
                        margin: "1rem",
                      }}
                    />
                    <Text
                      text={el.interest}
                      color={colors.white}
                      size={"20px"}
                    />
                  </div>
                );
              })}
            </div>
            <div
              style={{
                borderRadius: "12px",
                boxShadow: "0px 0px 10px 2px rgba(16, 163, 138, 1)",
                padding: "24px",
              }}
            >
              {rightInterestsColumn.map((el) => {
                return (
                  <div
                    key={el.interest}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      margin: "1rem",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={el.icon}
                      alt={""}
                      height={30}
                      style={{
                        margin: "1rem",
                      }}
                    />
                    <Text
                      text={el.interest}
                      color={colors.white}
                      size={"20px"}
                    />
                  </div>
                );
              })}
            </div>
          </Column>
        </Position>
      </PagePosition>
      <Footer />
    </>
  );
}

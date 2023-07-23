"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { TextParagraph, WhiteAndGreenText, Text } from "@/components/text";
import { Footer } from "@/components/footer";
import { colors } from "@/styles/colors";
import { Images } from "@/components/images";
import { Icons } from "@/components/icons";
import { PagePosition } from "@/components/wrappers/pagePosition";
import styled from "styled-components";

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 7rem 2rem;

  @media only screen and (min-width: 992px) {
    margin-top: 12rem;
  }
`;

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  height: 100%;
  width: 100%;

  @media only screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const WhiteAndGreenTextWrapper = styled.div`
  @media only screen and (max-width: 992px) {
    display: flex;
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 992px) {
    order: 1;
  }
`;

const InterestsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
`;

const InterestsTileWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-top: 2rem;

  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const InterestTile = styled.div`
  border-radius: 12px;
  box-shadow: 0px 0px 10px 2px ${colors.greenThemeColor};
  padding: 24px;
`;

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
        <AboutWrapper>
          <ColumnWrapper>
            <ImageWrapper>
              <Image
                src={Images.ERC2019MyPhoto}
                alt=""
                style={{ width: "100%", height: "100%", borderRadius: "8px" }}
                layout="responsive"
              />
            </ImageWrapper>
            <div>
              <WhiteAndGreenTextWrapper>
                <WhiteAndGreenText
                  firstText="About"
                  secondText="Me"
                  textSize="48px"
                  styles="margin-bottom: 1rem;"
                />
              </WhiteAndGreenTextWrapper>
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
          </ColumnWrapper>
          <InterestsWrapper>
            <Text
              text={"Interests"}
              color={colors.white}
              size={"48px"}
              styles="margin-bottom: 2rem;"
            />
            <InterestsTileWrapper>
              <InterestTile>
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
              </InterestTile>

              <InterestTile>
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
              </InterestTile>
            </InterestsTileWrapper>
          </InterestsWrapper>
        </AboutWrapper>
      </PagePosition>
      <Footer backgroundColor={colors.background.ebonyClay} />
    </>
  );
}

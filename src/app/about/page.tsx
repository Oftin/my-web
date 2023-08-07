"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Images } from "@/components/images";
import { Image } from "@/components/Modifiers";
import { Icons } from "@/components/icons";
import { PagePosition } from "@/components/wrappers/pagePosition";
import {
  MainText,
  SecondText,
  ThirdText,
  TextParagraph,
} from "@/components/text";
import {
  AboutWrapper,
  ColumnWrapper,
  TitleWrapper,
  ImageWrapper,
  InterestsWrapper,
  InterestsTileWrapper,
  InterestTile,
  TileItem,
} from "./styled";
import { colors } from "@/styles/colors";

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
              <Image src={Images.ERC2019MyPhoto} alt="ERC2019MyPhoto" />
            </ImageWrapper>
            <div>
              <TitleWrapper>
                <MainText>
                  <div>About</div>
                  <div>Me</div>
                </MainText>
              </TitleWrapper>

              <TextParagraph>
                The main word that describes me is an optimist. Because of that,
                I decided to rebrand myself as a programmer. With great passion
                for modern technology, especially artificial intelligence, I
                constantly try to improve my growing asset of skills. I have a
                master&apos;s degree in Automation and Robotics. Instead of
                problems, I see challenges and that is the mindset I am trying
                to apply to my personal life and career path.
              </TextParagraph>

              <TextParagraph $marginTop="1rem">
                I love new challenges, implementing my own ideas and helping
                people.
              </TextParagraph>
            </div>
          </ColumnWrapper>

          <InterestsWrapper>
            <SecondText>Interests</SecondText>
            <InterestsTileWrapper>
              <InterestTile>
                {leftInterestsColumn.map((el) => {
                  return (
                    <TileItem key={el.interest}>
                      <div style={{ width: "30px", margin: "1rem" }}>
                        <Image src={el.icon} alt="svgIcon" />
                      </div>
                      <ThirdText $color={colors.grayText}>
                        {el.interest}
                      </ThirdText>
                    </TileItem>
                  );
                })}
              </InterestTile>

              <InterestTile>
                {rightInterestsColumn.map((el) => {
                  return (
                    <TileItem key={el.interest}>
                      <div style={{ width: "30px", margin: "1rem" }}>
                        <Image src={el.icon} alt="svgIcon" />
                      </div>
                      <ThirdText $color={colors.grayText}>
                        {el.interest}
                      </ThirdText>
                    </TileItem>
                  );
                })}
              </InterestTile>
            </InterestsTileWrapper>
          </InterestsWrapper>
        </AboutWrapper>
      </PagePosition>
      <Footer />
    </>
  );
}
